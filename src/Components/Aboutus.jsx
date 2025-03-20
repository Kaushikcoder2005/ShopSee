import React from "react";
import { Users, Award, Target, Building2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const Aboutus = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description:
        "With 15 years of industry experience, Sarah leads our vision and strategy.",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description:
        "Technical innovator with a passion for cutting-edge solutions.",
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Emma Williams",
      role: "Head of Design",
      description:
        "Creative director bringing brands to life through thoughtful design.",
      image:
        "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "10K+",
      label: "Clients Served",
    },
    { icon: <Award className="w-6 h-6" />, value: "50+", label: "Awards Won" },
    {
      icon: <Target className="w-6 h-6" />,
      value: "99%",
      label: "Client Satisfaction",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      value: "15+",
      label: "Years Experience",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Our Company</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We're on a mission to transform the digital landscape through
          innovative solutions and exceptional customer experiences.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 bg-white rounded-lg shadow-sm"
          >
            <div className="flex justify-center mb-4 text-blue-600">
              {stat.icon}
            </div>
            <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mission Section */}
      <div className="mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            To empower businesses with innovative digital solutions that drive
            growth and create meaningful connections with their customers. We
            believe in combining cutting-edge technology with human-centered
            design to deliver exceptional results.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12">
          Meet Our Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <img
                src={member.image}
                className="w-24 h-24 bg-gray-200 rounded-full object-cover mx-auto mb-4"
                alt="Member"
              />

              <h3 className="text-xl font-bold text-center mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 text-center mb-4">{member.role}</p>
              <p className="text-gray-600 text-center">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-16 bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Work Together?</h2>
        <p className="text-gray-600 mb-6">
          Let's discuss how we can help transform your business.
        </p>
        <NavLink to="/contact"  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default Aboutus;
