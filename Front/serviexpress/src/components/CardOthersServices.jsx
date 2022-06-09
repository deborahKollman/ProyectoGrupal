import cardStyle from '../pages/styles/cardOthersServices.module.scss'
import Opinion from './Opinion'

export default function CardOthersServices(){
    return <div className={cardStyle.container}>
        <img src="https://images.unsplash.com/photo-1507335563142-a814078ce38c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdlbGRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="imagen"></img>
        <h3>Welder2000</h3>
        <p>"Cumplido"</p>
        <p>"Responsable"</p>
        <p>"Buen Precio"</p>
        <Opinion></Opinion>
      </div>


};