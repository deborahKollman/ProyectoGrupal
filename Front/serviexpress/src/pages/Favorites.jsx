import React from 'react'
import BurgerButton from '../components/NavBar/NavBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import Checkbox from '@mui/material/Checkbox';

import { useDispatch, useSelector } from 'react-redux';
import { getFavorites,removeFavorites } from '../redux/action';
import { useEffect } from 'react';
import styles from './styles/favorites.module.scss';
import { useNavigate} from "react-router-dom";

import Button from '@mui/material/Button';

const Favorites = ({id}) => {

    const dispatch = useDispatch();
    const fav = useSelector(state => state.favorites);

    useEffect(() => {
        dispatch(getFavorites(28))


    },[dispatch])


    const navigate = useNavigate();
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const detailClick = (e) => {
      console.log(e);
     // navigate('/detail/');
      

  };

  const removeFav = () => {
    checked && checked.forEach(e => {
        
        dispatch(removeFavorites(1,{id: e.id}));

    })
    
  };

 
  return (
    <div style={{height: '200vh'}}>
      <BurgerButton />

          <div className={styles.list}>
          <h2 className={styles.titleFav}>Favorites</h2>
          
          <List dense sx={{ width: '100%', bgcolor: 'lightgray' , borderRadius: 3}}>
      {fav.publications && fav.publications.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (

          
          <ListItem
          onClick={detailClick}
            className={styles.listCont}
            key={value.id}
            value= {value.id}
            secondaryAction={
              <Checkbox
                edge="start"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
                
               
              />
            }
            disablePadding
          >
            <ListItemButton value={value.id}>
              <div className={styles.container}>
                <div className={styles.divImg}>
                <img src={value.album[0]} alt="im"></img>
                </div>

                <div className={styles.infoColum}>
                  <h3>{value.title}</h3>
                  <p>Price: ${value.price}</p>
                </div>

              </div>

            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    <Button className={styles.btnSend} onClick={removeFav}>Delete</Button>
    </div>


     
    </div>
  )
}


export default Favorites