
export default function Index(){
    return     <form  className="p-5">
    <div className="block">
      <label className="block text-sm font-semibold">TITLE</label>
      <input className="bg-gray-300 border-t-0 p-1" style={{width: "100%"}} type="text" />
    </div>
    <div className="block">
      <label className="block text-sm font-semibold">DESCRIPTION</label>
      <textarea className="bg-gray-300" style={{width: "100%"}}  type="text" />
    </div>
    <div className="block text-sm font-semibold">
      <label className="block">DUE DATE</label>
      <input className="bg-gray-300 p-1 text-sm" style={{width: "100%"}}  type="date" />
    </div>
  </form>
}