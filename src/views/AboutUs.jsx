import React from 'react';

const teamMembers = [
  {
    name: 'Fahmidul',
    role: 'CEO & Founder',
    image:
      'https://media.licdn.com/dms/image/v2/D5603AQHZxuPpxxsvnw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728817364617?e=1740009600&v=beta&t=Denj9Hb27LQIz__bCx7o8vG6e20LUE4b7W5nMmH046o',
  },
  { name: 'Karim', role: 'CTO', image: 'https://yt3.googleusercontent.com/dKA9jj-1u63RqyGqUJVUhL1jzedUmvpQCNJnEMH69UxaI0HEyykJE0yxgJiwbqQQ5A7lC09D=s160-c-k-c0x00ffffff-no-rj' },
  {
    name: 'Rafi',
    role: 'Lead Designer',
    image:
      'https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/469752019_4254289308230251_7450125505411705831_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF-v9Ggont1HHwPgk0Y2QmJQWjDQlHVKBdBaMNCUdUoF8OUGT6U-MPlSp14psJKVg6tQxxSyV04cJ6HQzV2hxQy&_nc_ohc=7oFafvwuSnAQ7kNvgFKcRfv&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AsaWrr9FIuQLnMlPUyGQx92&oh=00_AYBJcaBeOrqQiOAPz3ilCIAzrU6DIhbVw4jHRkwtOXp8AA&oe=676CC35E',
  },
];

export default function AboutUs() {
  return (
    <div className="about-us container mt-4">
      <h1 className="text-center mb-4">About Us</h1>

      <section className="mb-5">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create a world where every cat finds a loving and forever home. We are dedicated to rescuing, rehabilitating, and rehoming cats in need while promoting responsible pet
          ownership and fostering a compassionate community. Through education, support, and advocacy, we aim to ensure a better life for cats and the people who love them.
        </p>
      </section>

      <section className="mb-5">
        <h2>Our History</h2>
        <p>
          Purrfect Adoption was born from a deep passion for feline welfare and a desire to make a meaningful difference in the lives of cats. It all started in 2012, when our founder, Emily,
          rescued a stray kitten named Whiskers from a stormy alleyway. That single act of kindness grew into a mission to help countless cats find safety, love, and forever homes. Since then, we have
          grown into a trusted organization, partnering with compassionate volunteers, local shelters, and dedicated foster families. From humble beginnings, rehoming just a few cats in our first
          year, we have now found loving homes for over 2,000 cats. Each purr and playful leap reminds us of why we do what we do—creating brighter futures for cats and the people who welcome them
          into their hearts.
        </p>
      </section>

      <section>
        <h2>Our Team</h2>
        <p>Meet the passionate individuals who make it all possible:</p>
        <div className="row mt-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-4 text-center ">
              <img src={member.image} alt={member.name} className="img-fluid mb-2" style={{ borderRadius: '50%', height: '150px', width: '150px', objectFit: 'cover' }} />
              <h5 className="mb-0">{member.name}</h5>
              <p className="text-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
