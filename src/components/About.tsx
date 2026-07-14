import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Heart, Shield, Users, Target } from "lucide-react";

export function About() {

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl tracking-tight">About Our Lab</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            CASA RUMBA Lab is at the forefront of child and adolescent mental health research, 
            combining rigorous scientific methodology with compassionate advocacy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl tracking-tight">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              The CASA RUMBA Lab is dedicated to promoting safe, supportive, and inclusive environments 
               for children, adolescents, and educators. Our research focuses on understanding and improving 
                 mental health, emotion regulation, and wellbeing in schools and communities.
            </p>
            <p className="text-lg leading-relaxed">
          We work at the intersection of psychology, education, technology, and public health to address issues such as 
           bullying prevention, suicide prevention, and school safety. Through collaborative, community-based 
          research and trauma-informed approaches, our goal is to translate science into meaningful action 
           that helps young people and those who support them thrive.
            </p>
             <p className="text-lg leading-relaxed">
              At CASA RUMBA, our research combines mixed-methods to 
              better understand mental health and safety in schools and communities. We conduct systematic and 
              scoping reviews, design survey-based and interview studies, and collaborate closely with educators, 
              students, and community partners. By blending data-driven analyses with real-world collaboration, 
              we ensure our findings are both scientifically rigorous and practically meaningful.
            </p>
          </div>
          
        <div className="bg-muted/50 rounded-2xl p-8 space-y-6">
          <h3 className="text-2xl tracking-tight">Our Research Goals</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl text-primary mb-2">1</div>
              <div className="text-sm text-muted-foreground">
                Explore how emotion regulation supports kinder, safer classrooms.
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-primary mb-2">2</div>
              <div className="text-sm text-muted-foreground">
                Review how colleges care for student wellbeing and suicide prevention.
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">
                Understand educators’ experiences to help make schools feel safer.
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">
                Study what helps college students feel safe, supported, and resilient.
              </div>
            </div>
            <div className="text-center col-span-2">
              <div className="text-3xl text-primary mb-2">5</div>
              <div className="text-sm text-muted-foreground">
                Build strong community partnerships and share our work to make a positive impact.
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}