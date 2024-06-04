let arrObj = [{student:'Hardhik',
             score: 250,
                wickets:5
         },
         {
            student:'Rahul',
            score:560,
            wickets:3
         },
         {
            student:'Sachin',
            score:990,
            wickets:7
         }
];

let finals = arrObj.filter((item, index)=>{
    if(item.wickets<7){
        return item;
    }
})
console.log(finals)