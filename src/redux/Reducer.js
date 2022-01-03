const initialState=[{
    id:0,
    name:'vicky gupta',
    email:'gupta@gmail.com',
    number:7654321890,
},
{
    id:1,
    name:'shashank gupta',
    email:'shashank@gmail.com',
    number:8058583673,
}]
const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_DATA":
            return [...state,
            action.payload,
        ];
            default : return state;
        }
   

}
export default Reducer;