export const flightsData = [
    {
      id: 1,
      start: 'Manila (MNL)',
      destination: 'Tokyo (NRT)',
      price: 25699,
      time: 275
    },
    {
      id: 2,
      start: 'Manila (MNL)',
      connect: {
        id: 3,
        start: 'Manila (MNL) to Taipei (TPE)',
        destination: 'Tokyo (NRT)',
        price: 17140,
        time: 340
      }
    },
    {
      id: 11,
      start: 'Tokyo (NRT)',
      destination: "Taipei (TPE)",
      price: 9174,
      time: 270
  },
    {
        id: 5,
        start: 'Tokyo (NRT)',
        destination: "Manila (MNL)",
        price: 9174,
        time: 270
    },
    {
      id: 8,
      start: 'Manila (MNL)',
      destination: "Jakarta (CGK)",
      price: 13899,
      time: 275
    },
    {
        id: 6,
        start: 'Manila (MNL)',
        destination: "Kuala Lumpur (KUL)",
        price: 3809,
        time: 245,
        connect:  {
          id: 7,
          start: 'Manila (MNL) to Kuala Lumpur (KUL) ',
          destination: 'Jakarta (CGK)',
          price: 6284,
          time: 350
          
        }
      },
      {
        id: 9,
        start:'Manila (MNL)',
        destination: "Singapore(SG)",
        price: 3809,
        time: 245,
        connect:  {
          id: 10,
          start: 'Manila (MNL) to Singapore(SG) ',
          destination: 'Jakarta (CGK)',
          price: 6284,
          time: 350
          
        }
      },
      {
        id: 12,
        start: 'Manila (MNL)',
        destination: "Bangkok (DMK)",
        price: 10436,
        time: 210
      },
      {
        id: 9,
        start:'Manila (MNL)',
        destination: "Seoul (ICN)",
        price: 3809,
        time: 145,
        connect:  { id: 77,
          start: 'Manila (MNL) to Seoul (ICN) ',
          destination: 'Bangkok (DMK)',
          price: 6284,
          time: 250 },
      },
      {
        id: 14,
        start:'Laoag (LAO)',
        destination: "Manila (MNL)",
        price: 3809,
        time: 145,
        connect:  {
          id: 15,
          start: 'Laoag (LAO) to Manila(MNL) to Bangkok (DMK)',
          destination: 'Bangkok (DMK)',
          price: 8284,
          time: 290
          
        }
      },
      {
        id: 17,
        start: 'Manila (MNL)',
        destination: "Beijing (CHN)",
        price: 12436,
        time: 410
      },
      {
        id: 18,
        start:'Manila (MNL)',
        destination: "Osaka (ONA)",
        price: 10809,
        time: 445,
        connect:  {
          id: 15,
          start: 'Manila(MNL) to Osaka (ONA)',
          destination: 'Beijing (CHN)',
          price: 8284,
          time: 290
          
        }
      },
      {
        id: 16,
        start: 'Laoag (LAO)',
        destination: "Bangkok (DMK)",
        price: 10436,
        time: 210
      },
      {
        id: 20,
        start:'Manila (MNL)',
        destination: "Brunei (BRN)",
        price: 10809,
        time: 445,
        connect:  {
          id: 21,
          start: 'Manila(MNL) to Brunei (BRN)',
          destination: 'Beijing (CHN)',
          price: 18284,
          time: 690
          
        } 
      },
      {
        id: 34,
        start:'Manila (MNL)',
        connect:  {
          id: 35,
          start: 'Manila(MNL) to Tokyo(NRT)',
          destination: 'Beijing (CHN)',
          price: 18284,
          time: 690
          
        } 
      },

      

      //More Flights...
  ]


  