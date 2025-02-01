import React from 'react';
import { Globe2, Users2, ArrowRight, BarChart3, Briefcase, Target, Network, Mail, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Conference room with city view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        
        <nav className="relative z-10 px-6 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <a href="#" className="text-white text-2xl company-name flex items-center gap-3 hover:text-gray-200 transition">
              <div className="w-10 h-10 border-2 border-white rounded-sm flex items-center justify-center">
                <span className="text-lg">FG</span>
              </div>
              Franklin Graystone
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-white hover:text-gray-300">About</a>
              <a href="#services" className="text-white hover:text-gray-300">Services</a>
              <a href="#expertise" className="text-white hover:text-gray-300">Expertise</a>
              <a href="#leadership" className="text-white hover:text-gray-300">Leadership</a>
              <a href="/blog" className="text-white hover:text-gray-300">Blog</a>
              <a href="#contact" className="bg-white text-gray-900 px-6 py-2 rounded-md hover:bg-gray-100 transition">
                Contact Us
              </a>
            </div>
          </div>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-[calc(100vh-5rem)] flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Bridging Sectors.<br />Driving Progress.
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Franklin Graystone excels in addressing complex challenges through collaborative efforts, crafting innovative solutions that yield measurable outcomes.
            </p>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition flex items-center gap-2 w-fit"
            >
              Learn More <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">About Franklin Graystone</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                Franklin Graystone drives progress by uniting people, ideas, and sectors. We tackle complex challenges through collaboration, delivering innovative, measurable solutions.
              </p>
              <p className="text-gray-600 text-lg">
                Our policy expertise and ability to navigate intricate landscapes bridge the public and private sectors, fostering meaningful partnerships that drive change.
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-lg mb-6">
                We guide organizations through regulatory complexities, craft effective strategies, and implement lasting solutions. Our deep industry knowledge ensures exceptional results.
              </p>
              <p className="text-gray-600 text-lg">
                Success today demands more than traditional consulting. Franklin Graystone blends diverse perspectives and expertise to solve unique challenges across public and private sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe2 className="h-8 w-8 text-blue-600" />,
                title: "Government Affairs",
                description: "Strategic advocacy and policy development to advance your interests at all levels of government."
              },
              {
                icon: <Users2 className="h-8 w-8 text-blue-600" />,
                title: "Public Affairs",
                description: "Comprehensive stakeholder engagement and communication strategies that build public support."
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
                title: "Strategic Advisory",
                description: "Expert guidance on complex regulatory and policy matters to help navigate challenging landscapes."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition">
                {service.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Core Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="h-6 w-6 text-blue-600" />,
                title: "Public Policy & Advocacy",
                description: "Expert navigation of policy landscapes and regulatory frameworks"
              },
              {
                icon: <Network className="h-6 w-6 text-blue-600" />,
                title: "Budget Development",
                description: "Strategic financial planning and fiscal policy implementation"
              },
              {
                icon: <Briefcase className="h-6 w-6 text-blue-600" />,
                title: "Program Development",
                description: "Comprehensive program design and management solutions"
              },
              {
                icon: <Users2 className="h-6 w-6 text-blue-600" />,
                title: "Stakeholder Engagement",
                description: "Creating lasting value through inclusive collaboration"
              }
            ].map((expertise, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  {expertise.icon}
                  <h3 className="font-semibold">{expertise.title}</h3>
                </div>
                <p className="text-gray-600">{expertise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership</h2>
          <div className="max-w-3xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ty Cratic</h3>
              <p className="text-gray-600 mb-6">
                A seasoned professional in public affairs and government relations, Ty Cratic is recognized for bridging gaps between the public and private sectors to drive meaningful and measurable outcomes. His extensive experience spans both government and private sector roles, where he has consistently delivered innovative solutions in policy development and strategic partnerships.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Professional Highlights</h4>
                  <p className="text-gray-600">
                    Throughout his career, Ty has successfully led numerous high-impact initiatives, including securing multi-million dollar grant funding for infrastructure projects and managing complex public-private partnerships. His experience includes overseeing significant budget initiatives and debt management strategies that led to improved bond ratings for major government entities. Ty's work in energy and transportation has positioned him as a trusted advisor in infrastructure planning and development.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Areas of Focus</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Energy and Transportation</li>
                    <li>Budget Development and Management</li>
                    <li>Program Development and Management</li>
                    <li>Strategic Partnership Building</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Contact Us</h2>
          <div className="max-w-xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <p>3435 Ocean Park Blvd. #107</p>
                    <p>Santa Monica, CA 90405</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <a href="mailto:Info@FranklinGraystone.com" className="hover:text-blue-600">
                    Info@FranklinGraystone.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 border-2 border-white rounded-sm flex items-center justify-center">
                  <span className="text-sm">FG</span>
                </div>
                <span className="company-name font-bold text-xl">Franklin Graystone</span>
              </div>
              <p className="text-gray-400">
                Strategic consulting for a complex world.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Government Affairs</li>
                <li>Public Affairs</li>
                <li>Strategic Advisory</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Leadership</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>3435 Ocean Park Blvd. #107</li>
                <li>Santa Monica, CA 90405</li>
                <li>Info@FranklinGraystone.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            © {new Date().getFullYear()} Franklin Graystone. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;