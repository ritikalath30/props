import ShowCards from './ShowCards'

const cardInfo = [
    {id:'1', image:'', title:"This is Sejal's Card", text:'Sejal'},
    {id:'2', image:'', title:"This is Amaan's Card", text:'Amaan'},
    {id:'3', image:'', title:"This is Parth's Card", text:'Parth'},
    {id:'4', image:'', title:"This is Dishant's Card", text:'Dishant'},
    {id:'5', image:'', title:"This is Ritika's Card", text:'Ritika'},
    {id:'6', image:'', title:"This is Murdula's Card", text:'Murdula'},
];

function AllCards(){
return (
    <section>
        <ShowCards cards={cardInfo}/>
    </section>
)
}

export default AllCards;