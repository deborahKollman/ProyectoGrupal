import stylesNav from '../pages/styles/stylesNav.module.scss'


export default function NavDetail(){
    let a = ["Plomeria","Electricidad","Jardineria","Albañileria","Pintura","Construccion"];

    return <div className={stylesNav.container}>
        {
            a.map(e => <button className={stylesNav.btn}>{e}</button>)
        }
    </div>


};