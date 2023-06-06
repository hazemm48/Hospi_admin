let sideNavData= (role)=>{
let data = {
  patient:[
  ["/patient/home","la-shapes","Home"],
  ["/patient/doctors","la-stethoscope","Doctors"],
  ["/patient/pharmacy","la-capsules","Pharmacy"],
  ["/patient/reservations","la-calendar-check","Reservations"],
  ["/patient/radiation","la-x-ray","Radiations"],
  ["/patient/laboratory","la-heartbeat","Laboratory"],
  ["/patient/symptomChecker","la-x-ray","Symptom checker"],
  ["/patient/firstAid","la-medkit","First Aid"],
  ["/patient/settings","la-cogs","Settings"],
],
doctor:[
  ["/doctor/home","la-shapes","Dashboard"],
  ["/doctor/patients","la-user-injured","Patients"],
  ["/doctor/pharmacy","la-capsules","Pharmacy"],
  ["/doctor/reservations","la-calendar-check","Reservations"],
  ["/doctor/settings","la-cogs","Settings"]
],
admin:[
  ["/admin/dashboard","la-shapes","Dashboard"],
  ["/admin/patients","la-user-injured","Patients"],
  ["/admin/doctors","la-stethoscope","Doctors"],
  ["/admin/pharmacy","la-capsules","Pharmacy"],
  ["/admin/reservations","la-calendar-check","Reservations"],
  ["/admin/radiation","la-x-ray","Radiations"],
  ["/admin/laboratory","la-heartbeat","Laboratory"],
  ["/admin/symptomChecker","la-x-ray","Symptom checker"],
  ["/admin/general","la-globe","General"],
  ["/admin/settings","la-cogs","Settings"],
]

}
return data[role]
}

export default sideNavData