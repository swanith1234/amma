import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App userData={{"name":"amma","emailId":"amma@gmail.com","phoneNo":"amma","projects":[{"title":"amma","description":"amma","technologiesUsed":[],"_id":"67489cc342008c69877ca519"}],"resume":"","experiences":[{"companyName":"amma","role":"amma","description":"amma","technologiesUsed":[],"duration":"amma","_id":"67489cc342008c69877ca51a"}],"techStacks":[],"contactDetailsUrls":[],"codingProfilesUrls":[],"certificationsUrls":[],"achievements":[{"title":"amma","description":"amma","_id":"67489cc342008c69877ca51b"}],"about":"amma","profilePhoto":"","_id":"67489cc342008c69877ca518","createdAt":"2024-11-28T16:39:32.004Z","updatedAt":"2024-11-28T16:39:32.004Z","__v":0}} />
  </StrictMode>,
)
