import React from 'react';
import doctor1 from '../../../images/Doctors/doctor1.jpg'
import doctor2 from '../../../images/Doctors/doctor2.jpg'
import doctor3 from '../../../images/Doctors/doctor3.jpg'
import Doctor from '../Doctor/Doctor';
import "./Doctors.css"


const doctors = [
    {
        img: doctor1,
        name: 'Dr. Bablu Hasan',
        expertize: 'Lung Cancer Specialist'
    },
    {
        img: doctor2,
        name: 'Dr. joti das',
        expertize: 'Blood Cancer Specialist'
    },
    {
        img: doctor3,
        name: 'Dr. Asma Khatun',
        expertize: 'Breast Cancer Specialist'
    }
]

const Doctors = () => {
    return (
        <div>
              <h2 className="text-primary mt-5 mb-4 docs">Our Specialist Doctors</h2>
            <div className="row mb-5">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.name}
                        doctor={doctor}
                    >

                    </Doctor>)
                }
                </div> 
        </div>
    );
};

export default Doctors;