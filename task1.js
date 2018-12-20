var employee = [
    {
        name: "vimal",
        age: "26",
        role:"Devolperr",
        gender: "male",  
        location: "chennai",
        contactNo:"7890654322", 
        dateofjoining: "oct 10-10-2018",
        dateofbirth:"24--06-1996",
        vehicle: "Bike",
        experience:"2",
        metropolitancity:"yes"

    },
    { 
        name: "soundariya",
        age: "30",
        role:"Project manager",
        gender: "female",
        location: "Banglore",
        contactNo:"8754775467",
        dateofjoining: "oct 10-10-2018",
        dateofbirth:"22/06/1994",
        vehicle: "car",
        experience:"10",
        metropolitancity:"yes"

        
    }, 
    {
        name: "Hariharan",
        age: "46",
        role:"project Manager",
        gender: "male",
        location: "chennai",
        contactNo:"7567892345",
        dateofjoining: " oct 10-10-2018",
        dateofbirth:"17-10-1996",
        vehicle: "bike",
        experience:"10",
        metropolitancity:"yes"

    },
        {
        name: "Raji",
        age: "26",
        gender: "female",
        role:"Team Leader",
        location: "coimbatore",
        contactNo:"9994965827",
        dateofjoining: " Feb 26/02/2018",
        dateofbirth:"oct 25-10-2018",
        vehicle: "null",
        experience:"5",
        metropolitancity:"yes"

        },

        {
        name: "Ganesh",
        age: "24",
        gender: "male",
        role:"Developer",
        location: "coimbatore",
        contactNo:"7094574852",
        dateofjoining: "Dec25-12-2018",
        dateofbirth:"12-06-1995",
        vehicle: "car",
        experience:"2",
        metropolitancity:"yes"

        },
        
        {
        name: "Ramesh",
        age: "25",
        gender: "male",
        role:"Developer",
        location: "Banglore",
        contactNo:"908765432",
        dateofjoining: " oct 25-10-2018",
        dateofbirth:"12-06-1994",
        vehicle: "car",
        experience:"2",
        metropolitancity:"yes"

        },
        {
        name: "kumar",
        age: "42", 
        gender: "male",
        role:"Team Leader",
        location: "coimbatore",
        contactNo:"7789654321",
        dateofjoining: " sep 21-09-2017",
        dateofbirth:"13-06-1978",
        vehicle: "car",
        experience:"5",
        metropolitancity:"yes"

        },
        {
        name: "Parthiban",
        age: "24",
        gender: "male",
        role:"Developer",
        location: "coimbatore",
        contactNo:"876543219",
        dateofjoining: " sep 22-09-2018",
        dateofbirth:"13-06-1978",
        vehicle: "car",
        experience:"2",
        metropolitancity:"yes"

        },
        {
        name: "viji",
        age: "42",
        gender: "female",
        role:"Developer",
        location: "coimbatore",
        contactNo:"908765432",
        dateofjoining: " sep 22-09-2018",
        dateofbirth:"17-06-1976",
        vehicle: "car",
        experience:"2",
        metropolitancity:"yes"

        },
        {
        name: "Parthiban",
        age: "54",
        gender: "male",
        role:"Developer",
        location: "coimbatore",
        contactNo:"8876543211",
        dateofjoining: " sep 22-09-2018",
        dateofbirth:"Dec 28-12-2012",
        vehicle: "null",
        experience:"2",
        metropolitancity:"yes"

        },
        ];
 filterdoj();       
        function filterdoj(){
            for(var i = 0;i<employee.length; i++) {
            employee.sort(function(a, b){
            var dateA=new Date(a.dateofjoining), dateB=new Date(b.dateofjoining);
            return dateA-dateB;
            })
            console.log(employee[i].name + "  " + employee[i].dateofjoining);
             }
            }
filterage();                     
        function filterage(){
                    for(var i = 0;i<employee.length; i++) {
                if((employee[i].age<=35)&&(employee[i].age>=30)){
                        console.log(employee[i].name+"   "+employee[i].age);
                        }
         }
             }
filterpersons();
                 function filterpersons(name,gender,experience){
                        this.name = name;
                        this.gender = gender;
                        this.experience=experience;
                    for(var i =0;i<employee.length;i++){
                    console.log(employee[i].name +"  "+ employee[i].gender +"  "+ employee[i].experience+ " "+employee[i].role +"  "+ employee[i].location);
                        }
                        employee.sort();
                     }
filterexperts();
           function filterexperts(){
                         for(i =0;i<employee.length;i++){
                            if(employee[i].experience==10){
                            console.log(employee[i].name + " " + "Project Manager");
                             }
                            else if(employee[i].experience==5){
                                console.log(employee[i].name + "  "+ "Team Leader");
                            }
                            else if(employee[i].experience==2){
                                console.log(employee[i].name + "  "+ "Developer");
                            }
                            else {
                                 console.log("sorry data not found");
                            
                                 }
                                } }
displayrole();
            function displayrole(){
              for(i =0;i<employee.length;i++){
                console.log(employee[i].name + " " +employee[i].role);
                     }
                  }
displaylocation();
           function displaylocation(){
            for(i =0;i<employee.length;i++){
                 console.log(employee[i].name + " " +employee[i].location);
                   }
                 }
displayvehicle();
                 function displayvehicle(){
                     for(i =0;i<employee.length;i++){
                          console.log(employee[i].name + " " +employee[i].vehicle);
                            }
                        }
displaymatchingnames();
     function displaymatchingnames(){
       var user= employee.filter(function(item){
      return item.name == "Parthiban";

});
console.log(user);
}
    metropolitancity();
       function metropolitancity(){
        for(i =0;i<employee.length;i++){
           if(employee[i].metropolitancity=="yes"){
          console.log(employee[i].name + "  "+employee[i].metropolitancity);
        }
           else{
               console.log("no data found");
           }
}  
}
