import { ToLogin } from "../../components/landing/toLogin/ToLogin"
import { ToSignup } from "../../components/landing/toSignup/ToSignup"
import style from "./LandingPage.module.css"
import educell from "../../assets/images/educell.png"

export const LandingPage = () => {


	return (
		<>
    <div className={style.wangDiv}>
      <img src={educell} className={style.image}></img>
      <div className={style.title} >에듀 세포</div>
      <div className={style.mainDiv} >
      <ToLogin />
      <ToSignup />
    </div>
    </div>
		</>
	)
}