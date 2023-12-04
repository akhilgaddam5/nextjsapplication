<<<<<<< HEAD

export default function Home() 
{
  return (
  <>
  <h1>Hi this is Akhil</h1>
  <a href="/blogs">Click for Time</a>
  </>
  );


}
=======
// pages/blogs/page.tsx



type Repository = {
  datetime : string;
}

export default async function Blogs()
{
  const blogs  = await fetch(
    
    'http://worldtimeapi.org/api/timezone/America/Chicago',
    
    {
      next:{
        revalidate:5,
      },
    }
  );
  const data:Repository = await blogs.json();
  
  return (
    <h1>
      TIme now in Chiacgo is : {data.datetime}
    </h1>
  );

}

>>>>>>> c538f8a498675756326044715438cbdba3005327
