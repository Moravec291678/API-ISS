import { useState, useEffect } from "react";


const App = () => {

  const url = "http://api.open-notify.org/iss-now.json"
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [urlMap, setUrlMap] = useState("")
  const [urlMapGoogle, setUrlMapGoogle] = useState("")

  const getCordinates = async () => {
    const response = await fetch(url)
    const data = await response.json()

    setLatitude(data["iss_position"]["latitude"])
    setLongitude(data["iss_position"]["longitude"])

    const iss_long = data["iss_position"]["longitude"]
    const iss_lat = data["iss_position"]["latitude"]

    setUrlMap(`https://mapy.cz/zakladni?x=${iss_long}&y=${iss_lat}&z=12`)
    setUrlMapGoogle(`https://www.google.com/maps/@${iss_lat},${iss_long},11z/data=!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D`)


  }

  useEffect(() => {
    getCordinates()
  }, [])


  return (
    <div className="text">
      <h1>API - ISS</h1>
      <h2>Zeměpisná šířka a délka</h2>
      <p>X: {latitude} --- Y: {longitude}</p>
      <div className="links">
        <a target="_blank" href={urlMap}>Pozice ISS - Mapy.cz</a>
        <a target="_blank" href={urlMapGoogle}>Pozice ISS - Google Maps</a>
      </div>

    </div>
  )
}

export default App