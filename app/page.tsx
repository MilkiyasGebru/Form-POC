import Image from 'next/image'

export default function Home() {
  return (
    <div>
    <form action="">
    <label>Name:</label>
    <input type="text" id="name" name="name" /><br />
    <label >Address:</label>
    <input type="text" id="address" name="address" /><br />
    <label >Age:</label>
    <input type="number" id="age" name="age" /><br />
    <label >Gender:</label><br />
    <select id="gender" name="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
    </select><br />
    <label >Cellphone:</label><br />
    <input type="tel" id="cellphone" name="cellphone" /><br /><br />
    <input type="submit" value="Submit" />
    </form>
</div>
  
  )
}
