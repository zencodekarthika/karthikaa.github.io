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
        experience:"5",

    },
    { 
        name: "soundariya",
        age: "30",
        role:"Hr",
        gender: "female",
        location: "Banglorei",
        contactNo:"8754775467",
        dateofjoining: "oct 10-10-2018",
        dateofbirth:"22/06/1994",
        vehicle: "car",
        experience:"5",
        
    }, 
    {
        name: "Hariharan",
        age: "46",
        role:"team manager",
        gender: "male",
        location: "chennai",
        contactNo:"7567892345",
        dateofjoining: " oct 10-10-2018",
        dateofbirth:"17-10-1996",
        vehicle: "bike",
        experience:"10",
    },
        {
        name: "Raji",
        age: "26",
        gender: "female",
        role:"Hr",
        location: "coimbatore",
        contactNo:"9994965827",
        dateofjoining: " Feb 23/02/2018",
        dateofbirth:"oct 25-10-2018",
        vehicle: "null",
        experience:"5",
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
        },
        {
        name: "kumar",
        age: "42",
        gender: "male",
        role:"Hr",
        location: "coimbatore",
        contactNo:"7789654321",
        dateofjoining: " sep 21-09-2017",
        dateofbirth:"13-06-1978",
        vehicle: "car",
        experience:"5",
        },
        {
        name: "Parthiban",
        age: "24",
        gender: "male",
        role:"Hr",
        location: "coimbatore",
        contactNo:"876543219",
        dateofjoining: " sep 22-09-2018",
        dateofbirth:"13-06-1978",
        vehicle: "car",
        experience:"2",
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
        experience:"10",
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
        experience:"5",
        },
        ];
 filterdoj();
        function filterdoj()
                {
                 for(var i =0;i<employee.length;i++)
                    {
                       console.log(employee[i].name+ " " + employee[i].dateofjoining);
                            
                        }
                       }
    filterage();
           
            function filterage()
            {
             for(var i =0;i<employee.length;i++)
                {
                    if ((employee[i].age<=35)&&(employee[i].age>30)){
                    console.log(employee[i].name+ " " + employee[i].age);
                        
                    }
                }
            }