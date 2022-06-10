import stylesCardSeller from '../pages/styles/stylesCardSeller.module.scss';
import star from '../assets/icons/star.png';
/* import {Modal,Button} from 'react-bootstrap'; */
import {useState} from 'react';
import {Modal} from '@mui/material';
import ContactCard from './ContactCard';

export default function CardSellerDetail(){

    const [show,setShow] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);











    return <div className={stylesCardSeller.containerCard}>
        <h3>About Seller</h3>
        <img src={"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt="perfil"></img>
        <h2 className={stylesCardSeller.name}>Name</h2>
        <div className={stylesCardSeller.opinion}>
            <div>
            <img src={star} alt="star"></img>
            <label>5.0</label>
            </div>
            <label>Texto </label>
        </div>


        <div className={stylesCardSeller.opinion}>
            <div>
            <img src={star} alt="star"></img>
            <label>5.0</label>
            </div>
            <label>Texto </label>
        </div>

        <div className={stylesCardSeller.opinion}>
            <div>
            <img src={star} alt="star"></img>
            <label>5.0</label>
            </div>
            <label>Texto </label>
        </div>

        <div className={stylesCardSeller.opinion}>
            <div>
            <img src={star} alt="star"></img>
            <label>5.0</label>
            </div>
            <label>Texto </label>
        </div>

        <div className={stylesCardSeller.opinion}>
            <div>
            <img src={star} alt="star"></img>
            <label>5.0</label>
            </div>
            <label>Texto </label>
        </div>


        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
        <button onClick={handleShow}>Contact</button>


        
{/*         <Modal show={show} onHide={handleClose} className={stylesCardSeller.contact}>
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ContactCard name="Electrician20" perfil="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?k=20&m=1300512215&s=612x612&w=0&h=enNAE_K3bhFRebyOAPFdJtX9ru7Fo4S9BZUZZQD3v20="></ContactCard>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
 */}


      <Modal
  open={show}
  onClose={handleClose}
  className={stylesCardSeller.modal}
>
{/*   <Box sx={stylesCardSeller}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
 */}

 <ContactCard name="Electrician20" perfil="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?k=20&m=1300512215&s=612x612&w=0&h=enNAE_K3bhFRebyOAPFdJtX9ru7Fo4S9BZUZZQD3v20="></ContactCard>
 

</Modal>












    </div>


};