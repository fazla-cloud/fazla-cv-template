import { Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, Award, Languages, Code, Palette, Facebook, MessageCircle, Twitter, Github, Linkedin } from 'lucide-react';

const ProfessionalCV = () => {
  const personalInfo = {
    name: "Fazla Rabbi",
    title: "Full-Stack Software Developer",
    phone: "+8801845855131",
    email: "fazla@fazla.pro",
    location: "Sunamganj, Bangladesh",
    profile_image: "https://i.ibb.co.com/nMf3K8Mt/a-professional-headshot-photograph-of-a-47r1-L4-YQRD-WUL0-SB6bi-Pw-Qvy-MQo0-ESUe-FCy-FAQ-8-ABg.jpg"
  };

  const coverLetterText = `Dear Hiring Manager,

I am writing to express my strong interest in the Software Developer position at your organization. With extensive experience in developing cross-platform applications, backend systems, and custom solutions, I bring a proven ability to deliver innovative and scalable products.

In my previous projects, I have built Android/iOS applications, web platforms, and even experimented with custom OS development, demonstrating versatility and adaptability. I am highly skilled in modern technologies including React, Flutter, Supabase, Firebase, and MySQL. My experience also extends to plugin development, system programming, and backend API design.

I am eager to contribute my expertise to your team, ensuring high-quality software solutions that drive success. I believe my technical background, problem-solving mindset, and dedication to continuous learning make me an excellent fit.

I would welcome the opportunity to discuss how my skills and experience align with your company’s goals.

Thank you for considering my application.

Sincerely,
Fazla Rabbi`;

  const workExperience = [
    {
      title: "Flutter Developer",
      company: "We Next Coder",
      duration: "2024 – Present",
      responsibilities: [
        "Developed and maintained cross-platform mobile applications using Flutter for Android and iOS.",
        "Collaborated with team members to design UI/UX and implement responsive, user-friendly features.",
        "Integrated REST APIs, Firebase, PostgreSQL, and MySQL databases for real-time data synchronization.",
        "Worked on performance optimization, bug fixing, and app publishing on Google Play Store.",
        "Contributed to multiple successful projects, including Next News and AI Health Doctor."
      ]
    },
    {
      title: "Full-Stack Developer (Freelance)",
      company: "Independent / Client Projects",
      duration: "2022 – Present",
      responsibilities: [
        "Developed cross-platform Android and iOS apps using Flutter and Kotlin.",
        "Built and deployed scalable web applications with React, Next.js, and PHP.",
        "Created custom WordPress plugins and WooCommerce integrations.",
        "Integrated secure payment gateways and APIs for client solutions.",
        "Designed and developed system-level software including a custom OS project."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Mathematics & Computer Science (Ongoing)",
      institute: "National University Bangladesh",
      duration: "2025 – Present"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institute: "Digendra Barman Govt. College",
      duration: "Completed on 2024"
    }
  ];

  const projects = [
    {
      name: "Next News",
      type: "Android App",
      duration: "Personal Project",
      description: "Android app with bottom navigation, news sections (Search, Breaking, Hot, Filter), bookmark & account management, Firebase integration."
    },
    {
      name: "AI Health Doctor",
      type: "Mobile App",
      duration: "Personal Project",
      description: "AI Prescription Reader, Medicine Reminder, Water Tracker, AI Health Assistant, Subscription monetization."
    },
    {
      name: "Custom OS Project",
      type: "System Software",
      duration: "Personal Project",
      description: "GUI, file management, networking with proxy support, hardware detection, wireless systems (Wi-Fi, Bluetooth, IR), advanced security."
    }
  ];

  const webProjects = [
    {
      name: "Custom Admin Panel",
      duration: "Personal Project",
      description: "PHP + MySQL-based admin panel with hosting, role-based access, analytics, and API integration."
    },
    {
      name: "Portfolio Website",
      duration: "Personal Project",
      description: "React + Supabase; personal portfolio showcasing skills and projects."
    }
  ];

  const skills = [
    "Mobile Development (Flutter, Kotlin, Android, iOS)",
    "Web Development (React, Next.js, PHP, WordPress)",
    "Backend Development (REST APIs, Supabase, Firebase, MySQL, PostgreSQL)",
    "System Programming (C/C++, Custom OS Development)",
    "UI/UX Design (Neumorphism, 3D Modeling, Theme Animations)",
    "Tools (Android Studio, VS Code, MySQL Workbench, Cloudflare, Railway)"
  ];

  const languages = [
    "Bangla (Fluent)",
    "English (Proficient)",
    "Hindi (Proficient)",
    "Arabic (Basics)"
  ];

  const interests = [
    "AI & Machine Learning",
    "3D Printing",
    "System Programming",
    "Cybersecurity"
  ];

  const socialLinks = {
    facebook: "https://www.facebook.com/InnocentP480",
    whatsapp: "https://wa.me/+8801845855131",
    github: "https://github.com/fazla-cloud",
    linkedin: "https://www.linkedin.com/in/fzlr/",
    twitter: "https://x.com/fazla_fr",
    email: "mailto:fazla@fazla.pro"
  };

  return (
    <div className="bg-gray-50 text-gray-900" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
      {/* Cover Letter Page */}
      <div className="min-h-screen p-8 page-break-after" style={{ pageBreakAfter: 'always' }}>
        <div className="max-w-4xl mx-auto bg-white shadow-lg">
          {/* Header */}
          <div className="bg-teal-600 text-white p-8">
            <div className="text-left">
              <div className="mb-6">
                <img 
                  src={personalInfo.profile_image} 
                  alt="Profile" 
                  className="w-28 h-28 rounded-full mb-4 border-4 border-white shadow-lg"
                />
              </div>
              <h1 className="text-4xl font-bold mb-2 tracking-tight">{personalInfo.name}</h1>
              <h2 className="text-xl text-teal-100 mb-6 font-medium">{personalInfo.title}</h2>
              
              <div className="flex flex-wrap justify-start items-center gap-6 text-sm bg-teal-700 rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-teal-200" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-teal-200" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-teal-200" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Cover Letter Content */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                  <Mail size={18} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-teal-600 pb-1">Cover Letter</h3>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-teal-600">
                <div className="whitespace-pre-line text-justify leading-7 text-gray-700">
                  {coverLetterText}
                </div>
              </div>
            </div>

            {/* Career Objective */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                  <Award size={18} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 border-b-2 border-teal-600 pb-1">Career Objective</h3>
              </div>
              <p className="text-justify leading-7 text-gray-700 bg-gray-50 p-6 rounded-lg border-l-4 border-teal-600">
                To leverage my expertise in full-stack development, specializing in cross-platform mobile and web applications, to deliver innovative, scalable, and user-centric software solutions that drive organizational success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Page */}
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg">
          {/* Header */}
          <div className="bg-teal-600 text-white p-6">
            <div className="text-center">
              <div className="mb-4">
                <img 
                  src={personalInfo.profile_image} 
                  alt="Profile" 
                  className="w-24 h-24 rounded-full mx-auto mb-3 border-4 border-white shadow-lg"
                />
              </div>
              <h1 className="text-3xl font-bold mb-1 tracking-tight">{personalInfo.name}</h1>
              <h2 className="text-lg text-teal-100 mb-4 font-medium">{personalInfo.title}</h2>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm bg-teal-700 rounded-lg p-3">
                <div className="flex items-center gap-1">
                  <Phone size={14} className="text-teal-200" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail size={14} className="text-teal-200" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-teal-200" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Work Experience */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                      <Briefcase size={18} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 border-b-2 border-teal-600 pb-1">Work Experience</h3>
                  </div>
                  {workExperience.map((job, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-600 text-left">
                      <div className="font-bold text-gray-900 text-lg text-left">{job.title}</div>
                      <div className="text-teal-600 font-semibold text-left">{job.company}</div>
                      <div className="text-sm text-gray-600 mb-2 text-left">{job.duration}</div>
                      <ul className="text-sm text-gray-700 leading-5 text-left list-disc list-inside">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Education */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                      <GraduationCap size={18} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 border-b-2 border-teal-600 pb-1">Education</h3>
                  </div>
                  <div className="space-y-3">
                    {education.map((edu, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-600 text-left">
                        <div className="font-bold text-gray-900 text-left">{edu.degree}</div>
                        <div className="text-sm text-teal-600 font-semibold text-left">{edu.institute}</div>
                        <div className="text-sm text-gray-600 text-left">{edu.duration}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                      <Languages size={18} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 border-b-2 border-teal-600 pb-1">Languages</h3>
                  </div>
                  <div className="space-y-3">
                    {languages.map((lang, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-600">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-gray-900">{lang}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                      <Globe size={18} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 border-b-2 border-teal-600 pb-1">Professional Links</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div onClick={() => window.open(socialLinks.facebook, '_blank')} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100">
                      <Facebook size={16} className="text-blue-600" />
                      <span className="text-gray-700 font-semibold">Facebook</span>
                    </div>
                    <div onClick={() => window.open(socialLinks.whatsapp, '_blank')} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100">
                      <MessageCircle size={16} className="text-green-600" />
                      <span className="text-gray-700 font-semibold">WhatsApp</span>
                    </div>
                    <div onClick={() => window.open(socialLinks.github, '_blank')} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100">
                      <Github size={16} className="text-gray-800" />
                      <span className="text-gray-700 font-semibold">GitHub</span>
                    </div>
                    <div onClick={() => window.open(socialLinks.linkedin, '_blank')} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100">
                      <Linkedin size={16} className="text-blue-700" />
                      <span className="text-gray-700 font-semibold">LinkedIn</span>
                    </div>
                    <div onClick={() => window.open(socialLinks.twitter, '_blank')} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100">
                      <Twitter size={16} className="text-sky-600" />
                      <span className="text-gray-700 font-semibold">Twitter</span>
                    </div>
                    <div onClick={() => window.open(socialLinks.email, '_blank')} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100">
                      <Mail size={16} className="text-teal-600" />
                      <span className="text-gray-700 font-semibold">Email</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Skills */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                      <Award size={18} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 border-b-2 border-teal-600 pb-1">Skills</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {skills.map((skill, index) => (
                      <div key={index} className="bg-gray-50 px-4 py-3 rounded-lg text-sm font-semibold text-gray-800 border border-gray-200 flex items-center justify-between hover:bg-teal-50 transition-colors">
                        <span>{skill}</span>
                        <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                      <Code size={18} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 border-b-2 border-teal-600 pb-1">Key Projects</h3>
                  </div>
                  <div className="space-y-3">
                    {projects.map((proj, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-600 text-left">
                        <div className="font-bold text-gray-900 text-lg text-left">{proj.name}</div>
                        <div className="text-teal-600 font-semibold text-left">{proj.type}</div>
                        <div className="text-sm text-gray-600 mb-2 text-left">{proj.duration}</div>
                        <p className="text-sm text-gray-700 leading-5 text-left">{proj.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Web Projects */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                      <Globe size={18} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 border-b-2 border-teal-600 pb-1">Web Projects</h3>
                  </div>
                  <div className="space-y-3">
                    {webProjects.map((proj, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-600 text-left">
                        <div className="font-bold text-gray-900 text-lg text-left">{proj.name}</div>
                        <div className="text-sm text-gray-600 mb-2 text-left">{proj.duration}</div>
                        <p className="text-sm text-gray-700 leading-5 text-left">{proj.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interests */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                      <Palette size={18} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 border-b-2 border-teal-600 pb-1">Interests</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {interests.map((interest, index) => (
                      <div key={index} className="bg-gray-50 px-4 py-3 rounded-lg text-sm font-semibold text-gray-800 border border-gray-200 flex items-center justify-between hover:bg-teal-50 transition-colors">
                        <span>{interest}</span>
                        <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          body { 
            margin: 0; 
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .page-break-after { page-break-after: always; }
          .min-h-screen { min-height: auto; }
          .grid { display: grid !important; }
          .gap-8 { gap: 1rem !important; }
          .gap-6 { gap: 0.75rem !important; }
          .p-8 { padding: 1rem !important; }
          .p-6 { padding: 0.75rem !important; }
          .mb-8 { margin-bottom: 1rem !important; }
          .mb-6 { margin-bottom: 0.75rem !important; }
          .mb-4 { margin-bottom: 0.5rem !important; }
          .mb-3 { margin-bottom: 0.375rem !important; }
          .mb-2 { margin-bottom: 0.25rem !important; }
          .mb-1 { margin-bottom: 0.125rem !important; }
          .shadow-lg { box-shadow: none !important; }
          img { 
            width: 60px !important; 
            height: 60px !important; 
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .rounded-lg { border-radius: 8px !important; }
          .bg-teal-600, .bg-teal-700 { 
            background-color: #0d9488 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
        
        @page {
          size: A4;
          margin: 0.5in;
        }
      `}</style>
    </div>
  );
};

export default ProfessionalCV;
