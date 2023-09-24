
const CompHead = (props) => {
  return (
      <div className='text-center mb-[86px]'>
              <h1 className='text-primary text-[32px] font-bold uppercase'>{props.title}</h1>
              <h1 className='text-black text-[40px] font-[800]'>{props.desc}</h1>
        </div>
  )
}

export default CompHead