import React from 'react'
import VDIT from './assets/VDIT.jpg'
import Sudhakar from './assets/Sudhakar.jpg'
import Deepa from './assets/Deepa.jpg'
import EngineerHuman from './assets/Engineer-Human.jpg'
import MechanicalEngineering from './assets/Mechanical-Engineering.jpg'
import Zenandtheartofmotorcyclemaintenance from './assets/Zen-and-the-art-of-motorcycle-maintenance.jpg'

import LibraryImg from './assets/Library.jpg'
import './App.css'
const Home = () => {
  return (
    <div className='homeSec'>
      <section className='ourCollege'> 
        <header className='collegeHeader'><h1>Our College</h1></header>
<h2>KLS VISHWANATHRAO DESHPANDE INSTITUTE OF TECHNOLOGY HALIYAL</h2>
      <div className='collegeInfo'>
      <img src={VDIT} alt='KLS VDIT Haliyal' />
      <p>
  Welcome to the KLS Vishwanathrao Deshpande Institute of Technology Library
  Portal. Our library supports academic excellence by providing students and
  faculty with access to a wide range of books, educational resources, and
  learning materials. This portal is designed to simplify library access,
  manage student records, and provide an efficient and organized library
  experience.
</p>
      
      </div>
      </section>

      <section className='collegeLib'>
  <h2>We Facilitate</h2>

  <div className='libSec'>
    <h2>Library</h2>

    <img src={LibraryImg} alt='VDIT Library' />

    <p>
      The Library at KLS Vishwanathrao Deshpande Institute of Technology,
      Haliyal, serves as an academic resource centre for engineering students
      and faculty. The library provides a wide collection of textbooks,
      reference books, technical publications, and learning resources covering
      various engineering disciplines. Students can access books related to
      their respective departments, emerging technologies, competitive
      examinations, aptitude, and career development.
    </p>

    <ul>
      <li>
        <strong>Computer Science & Engineering:</strong> Programming, Data
        Structures, DBMS, Operating Systems, Computer Networks, Artificial
        Intelligence, Machine Learning, Cloud Computing, and Web Development.
      </li>

      <li>
        <strong>Electronics & Communication Engineering:</strong> Digital
        Electronics, Analog Circuits, Microcontrollers, Embedded Systems, VLSI,
        Signal Processing, Communication Systems, and IoT.
      </li>

      <li>
        <strong>Mechanical Engineering:</strong> Thermodynamics, Fluid Mechanics,
        Manufacturing Technology, Machine Design, CAD/CAM, Automobile
        Engineering, and Heat Transfer.
      </li>

      <li>
        <strong>Civil Engineering:</strong> Structural Engineering, Surveying,
        Geotechnical Engineering, Concrete Technology, Transportation
        Engineering, and Construction Management.
      </li>

      <li>
        <strong>Electrical & Electronics Engineering:</strong> Electrical
        Machines, Power Systems, Control Systems, Power Electronics, Renewable
        Energy, and Circuit Analysis.
      </li>

      <li>
        <strong>Artificial Intelligence & Emerging Technologies:</strong> AI,
        Machine Learning, Deep Learning, Data Science, Python, Cyber Security,
        Blockchain, and Generative AI.
      </li>

      <li>
        <strong>Basic Science & Competitive Exams:</strong> Engineering
        Mathematics, Physics, Chemistry, GATE preparation, Aptitude, Logical
        Reasoning, Placement Preparation, and General Knowledge.
      </li>
    </ul>
  </div>
</section>

<section className='libAdmins'>
    <h2> Our Librarians</h2>
    <div className='librarianList'>
        <div className='libAdminCard'>
            <img src={Sudhakar} alt='Sudhakar(Librarian)' />
            <p><span>Name: </span> Sudhakar</p>
            <p><span>Role: </span> Senior Librarian</p>
            <p><span>Id  : </span>REF89856VDIT2365</p>
        </div>
        <div className='libAdminCard'>
            <img src={Deepa} alt='Deepa(Librarian)' />
            <p><span>Name: </span> Deepa</p>
            <p><span>Role: </span> Assistant Librarian</p>
            <p><span>Id  : </span>REF65782VDIT7514</p>
        </div>
    </div>
</section>
<section className='popularBooks'> 
    <h2>Popular Books we have</h2>
    <div className='bookCard'>
        <div>
            <img src={EngineerHuman} alt="Engineer Human" />
            <p><span>Book Name:    </span>To Engineer Is Human</p>
            <p><span>Author Name:  </span>Henry Petroski</p>
        </div>
        <div>
            <img src={MechanicalEngineering} alt="Mechanical Engineering " />
            <p><span>Book Name:    </span>Mechanical Engineering</p>
            <p><span>Author Name:  </span>Mark Huber</p>
        </div>
        <div>
            <img src={Zenandtheartofmotorcyclemaintenance} alt="Zen And The Art Of Motorcycle Maintenance" />
            <p><span>Book Name:    </span>Zen And The Art Of Motorcycle Maintenance</p>
            <p><span>Author Name:  </span>Robern M Pirsig</p>
        </div>
    </div>
</section>
<section className='admissionInfo'>
    <h2>Join Our Library</h2>

<p>
  Become a member of the VDIT Library and gain access to a wide collection of
  engineering textbooks, reference materials, technical resources, and academic
  publications. Students from all engineering departments can register using
  their valid college details and access library resources that support their
  academic learning, technical knowledge, and career development.
</p>
</section>
    </div>
  )
}

export default Home
