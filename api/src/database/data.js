module.exports = {
  categories: [
    {
      cat_id: 1,
      cat_name: 'Plomería',
      cat_ser: [
        { ser_id: 1, ser_name: 'Asesoramiento' },
        { ser_id: 2, ser_name: 'Instalaciones' },
        { ser_id: 3, ser_name: 'Destape cañerías' }
      ]
    },
    {
      cat_id: 2,
      cat_name: 'Electricidad',
      cat_ser: [
        { ser_id: 4, ser_name: 'Tableros eléctricos' },
        { ser_id: 2, ser_name: 'Instalaciones' },
        { ser_id: 5, ser_name: 'Trifásica' },
        { ser_id: 1, ser_name: 'Asesoramiento' }
      ]
    }
  ],
  publications: [
    {
      pub_id: 1,
      pub_cat_name: 'Plomeria',
      pub_cat_ser: ['Asesoramiento', 'Instalaciones'],
      pub_sel_name: 'Juan Carlos Garcia',
      pub_sel_reputation: 4,
      pub_date: '01/06/2022',
      pub_album: ['http://localhost:3001/img/img1.png', 'http://localhost:3001/img/img2.png'],
      pub_price: 1200
    },
    {
      pub_id: 2,
      pub_cat_name: 'Electricidad',
      pub_cat_ser: ['Asesoramiento', 'Instalaciones'],
      pub_sel_name: 'Brian Cristopher',
      pub_sel_reputation: 3,
      pub_date: '18/06/2020',
      pub_album: ['http://localhost:3001/img/img3.png', 'http://localhost:3001/img/img4.png'],
      pub_price: 800
    }
  ],
  users: [
    {
      usr_id: 1,
      usr_email: 'usr1@hotmail.com',
      usr_password: 'textosincifrar',
      usr_name: 'Usuario 1',
      usr_country: 'Argentina',
      usr_province_state: 'Santa Fe',
      usr_rol: 'Customer',
      usr_buyer_reputation: 3,
      usr_buyer_opinions: 3,
      usr_seller_reputation: 4,
      usr_seller_opinions: 4
    },
    {
      usr_id: 2,
      usr_email: 'usr2@hotmail.com',
      usr_password: 'laclave',
      usr_name: 'Usuario2',
      usr_country: 'Argentina',
      usr_province_state: 'Buenos Aires',
      usr_rol: 'Customer',
      usr_buyer_reputation: 4,
      usr_buyer_opinions: 3,
      usr_seller_reputation: 3,
      usr_seller_opinions: 4
    },
    {
      usr_id: 3,
      usr_email: 'usr3@hotmail.com',
      usr_password: 'contraseña',
      usr_name: 'Usuario3',
      usr_country: 'Bolivia',
      usr_province_state: 'Bolivia',
      usr_rol: 'Admin',
      usr_buyer_reputation: 0,
      usr_buyer_opinions: 0,
      usr_seller_reputation: 0,
      usr_seller_opinions: 0
    }
  ]
};
