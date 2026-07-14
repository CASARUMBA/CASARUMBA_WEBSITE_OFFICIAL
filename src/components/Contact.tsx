
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin, Phone, Mail, Clock, Building } from "lucide-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_ujb7r7s", // replace with your EmailJS service ID
        "template_6kjxhkq", // replace with your EmailJS template ID
        form.current,
        "KFz6sfcEtiUDKwy1Z" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          alert("Message sent! We'll get back to you soon.");
          form.current?.reset();
        },
        (error) => {
          console.error("Email sending error:", error.text);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl tracking-tight">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in collaborating, participating in research, or learning more about our work? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl tracking-tight">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">CASA RUMBA Laboratory</p>
                    <p className="text-muted-foreground">University of South Carolina</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-muted-foreground">
                      Barnwell College, 1512 Pendleton St, Columbia, SC 29208<br />
                      University of South Carolina
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <p className="text-muted-foreground"></p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <p className="text-muted-foreground">lab.casarumba@gmail.com</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Weekend: By appointment only
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="Enter your email address" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization (Optional)</Label>
                    <Input id="organization" name="organization" placeholder="Your organization or institution" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="What is this regarding?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell us more about your inquiry or how we can help..." 
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground mt-2">
                  We typically respond to inquiries within 2-3 business days. 
                  For urgent matters, please call our main office number.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
