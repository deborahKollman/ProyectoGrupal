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
      pub_detail:
        '10 años dde experiencia en el rubro. Seriedad y responsabilidad',
      pub_price: 1200
    }
  ]
};
