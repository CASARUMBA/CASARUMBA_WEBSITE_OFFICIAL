
import React, { useEffect, useRef, useState } from "react"; 
// React + hooks:
// useState = stores values (like current image index)
// useEffect = runs side effects (like timers)
// useRef = stores something that persists without re-rendering (timer)

import { Button } from "./ui/button"; // reusable button component
import { ArrowRight, Users, ChevronLeft, ChevronRight } from "lucide-react"; // icons
import { ImageWithFallback } from "./figma/ImageWithFallback"; 
// custom image component (likely handles missing images gracefully)

import { Link } from "react-router-dom"; // used for navigation between pages

export function Hero() {

  // ================= IMAGE LIST =================
  // These are the images used in the carousel (slideshow)
  const images = [
    {
      src: "/images/team/happycocky.png",
      alt: "Research laboratory setting",
    },
    {
      src: "/images/team/happyhug.png",
      alt: "Students collaborating",
    },
    {
      src: "/images/team/happyflowers.png",
      alt: "Classroom environment",
    },
    {
      src: "/images/team/happyvalentine.png",
      alt: "Classroom environment",
    },
    {
      src: "/images/team/happyposter.png",
      alt: "Classroom environment",
    },
  ];

  // How fast the slideshow changes (in milliseconds)
  const AUTO_PLAY_MS = 3500; // 3.5 seconds

  // ================= STATE =================

  // Tracks which image is currently being shown
  const [index, setIndex] = useState(0);

  // Tracks if the slideshow is paused (ex: when user hovers over it)
  const [isPaused, setIsPaused] = useState(false);

  // Stores the interval (timer) so we can clear/reset it later
  const timerRef = useRef<number | null>(null);

  // ================= TIMER FUNCTION =================

  // Starts the slideshow timer
  const startTimer = () => {

    // If a timer already exists, clear it first (prevents duplicates)
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // Create a new timer that moves to next image every AUTO_PLAY_MS
    timerRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
      // % images.length makes it loop back to start
    }, AUTO_PLAY_MS);
  };

  // ================= EFFECT =================

  // Runs when:
  // - component loads
  // - pause state changes
  // - number of images changes
  useEffect(() => {

    // Only start timer if NOT paused
    if (!isPaused) startTimer();

    // Cleanup function (runs when component unmounts or updates)
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    // eslint-disable-next-line prevents warning about missing deps
  }, [isPaused, images.length]);

  // ================= MANUAL NAVIGATION =================

  // Jump to a specific image
  const goto = (i: number) => {
    setIndex(i);

    // Clear existing timer so it doesn't conflict
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // Restart autoplay (if not paused)
    if (!isPaused) {
      timerRef.current = window.setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, AUTO_PLAY_MS);
    }
  };

  // Go to next image
  const goNext = () => goto((index + 1) % images.length);

  // Go to previous image
  const goPrev = () => goto((index - 1 + images.length) % images.length);

  return (

    // Main hero section (top of homepage)
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Layout: 2 columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT SIDE (TEXT CONTENT) ================= */}
          <div className="space-y-8">

            {/* Title + subtitle */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl tracking-tight">
                <span className="text-blue-900">CASA RUMBA</span> Lab
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg">
                Child and Adolescent Safety Advocacy Research on Understanding Mental Health, Belonging and Access
              </p>
            </div>

            {/* Description + actions */}
            <div className="space-y-6">

              <p className="text-lg leading-relaxed max-w-2xl">
                We are dedicated to advancing research in child and adolescent mental health,
                focusing on safety, belonging, and access to care.
              </p>

              {/* ================= SOCIAL LINK ================= */}
              <p className="text-lg leading-relaxed max-w-2xl flex items-center gap-3">

                <span className="font-medium text-gray-700">
                  Follow our social media:
                </span>

                {/* Opens Instagram in new tab */}
                <Link
                  to="https://www.instagram.com/lab.casarumba/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-xl px-4 transition hover:bg-gray-100"
                  >
                    Instagram
                  </Button>
                </Link>
              </p>

              {/* ================= BUTTONS ================= */}
              <div className="flex flex-col sm:flex-row gap-4">

                {/* Scrolls to About section */}
                <a href="#about">
                  <Button size="lg" className="group">
                    Learn About Our Research
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>

                {/* Navigates to team page */}
                <Link to="/team">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="group rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                  >
                    <Users className="mr-2 h-4 w-4 opacity-80" />
                    Meet the Team
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE (IMAGE CAROUSEL) ================= */}
          <div
            className="relative"

            // Pause slideshow when user interacts
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >

            {/* Image container */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white relative">

              {/* Loop through all images */}
              {images.map((img, i) => {

                // Only show the active image
                const active = i === index;

                return (
                  <div
                    key={i}

                    // Only active image is visible
                    className={`${active ? "block" : "hidden"} absolute inset-0`}
                    aria-hidden={!active}
                  >

                    {/* Clicking image goes to next */}
                    <button
                      type="button"
                      onClick={goNext}
                      className="w-full h-full block p-0 m-0 border-0 bg-transparent"
                      aria-label="Next image"
                    >

                      {/* Image display */}
                      <ImageWithFallback
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover block"
                        {...({ loading: "lazy" } as any)}
                      />

                    </button>
                  </div>
                );
              })}

              {/* ================= ARROWS ================= */}

              {/* Previous button */}
              <button
                aria-label="Previous slide"
                onClick={goPrev}
                className="absolute left-3 top-3 z-30 rounded-full bg-white/90 p-2 shadow hover:bg-white transition"
                style={{ backdropFilter: "blur(6px)" }}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {/* Next button */}
              <button
                aria-label="Next slide"
                onClick={goNext}
                className="absolute right-3 top-3 z-30 rounded-full bg-white/90 p-2 shadow hover:bg-white transition"
                style={{ backdropFilter: "blur(6px)" }}
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* ================= DOT INDICATORS ================= */}
              <div className="absolute left-1/2 bottom-4 -translate-x-1/2 z-30 flex gap-2">

                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goto(i)}
                    aria-label={`Go to slide ${i + 1}`}

                    // Active dot = dark blue, others = light
                    className={`h-2 w-8 rounded-full transition-all ${
                      i === index ? "bg-blue-900" : "bg-white/60"
                    }`}

                    // Adds glow to active dot
                    style={{
                      boxShadow:
                        i === index
                          ? "0 4px 12px rgba(12,74,110,0.12)"
                          : undefined,
                    }}
                  />
                ))}

              </div>
            </div>

            {/* ================= DECORATIVE BLOBS ================= */}
            {/* These are just background visuals (no functionality) */}

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl pointer-events-none"></div>

            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl pointer-events-none"></div>

          </div>
        </div>
      </div>
    </section>
  );
}