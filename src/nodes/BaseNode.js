
export const BaseNode = ({children,data}) => {
  return(
    <>
     <div className="min-w-72 w-auto min-h-32 border-2 border-sky-500 rounded-md p-3 bg-white shadow-lg ">
     
    {children}
    </div>
    </>
  )
}