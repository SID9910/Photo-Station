export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center' style={{ backgroundImage: `url('https://images.freecreatives.com/wp-content/uploads/2016/04/Solid-Black-Website-Background.jpg')`, backgroundSize: 'cover' }}>
      <div className='max-w-2xl mx-auto p-3 text-center text-white'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Post Station
          </h1>
          <div className='text-md flex flex-col gap-6'>
            <p>
              Welcome to Post Station! This App was created by Siddharth Gupta
              as a personal project to share his thoughts and ideas with the
              world. Siddharth is a passionate developer who loves to write about
              technology, coding, and everything in between.
            </p>

            <p>
              Post Station is a platform dedicated to empowering individuals to share their thoughts, stories, and expertise with the world.<br></br> Our user-friendly interface makes it easy for both novice and experienced bloggers to create and publish compelling content.
            </p>

            <ul className="list-disc text-left max-w-lg">
              <li>User-friendly content management system (CMS)</li>
              <li>Responsive design for seamless browsing across devices</li>
              <li>Robust search functionality for discovering relevant content</li>
              <li>Interactive features like comments, likes, and social media integration</li>
              <li>Analytics tools to track audience engagement and performance</li>
            </ul>

            <p><strong>Get Started:</strong></p>
            <p>Join our community of writers and readers today to start exploring, sharing, and connecting through meaningful content.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
