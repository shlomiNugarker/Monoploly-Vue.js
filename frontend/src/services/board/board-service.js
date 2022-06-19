import { utilService } from '../util.service'
// import { httpService } from '../http.service'
import { storageService } from '../async-storage.service'

const KEY = 'board_db'

const ENDPOINT = 'board'
// const BASE_URL =
//   process.env.NODE_ENV !== 'development' ? '/api/board' : '//localhost:3030/api/board/'

export const boardService = {
  query,
  getBoardById,
  remove,
  save,
  getNewBoard,
}

const gBoards = _createBoards()

async function query(filterBy = {}) {
  // return await httpService.get(ENDPOINT, filterBy)
  return storageService.query(KEY)
}

async function getBoardById(boardId) {
  // return await httpService.get(`${ENDPOINT}/${boardId}`)
  return storageService.getById(KEY, boardId)
}

async function remove(boardId) {
  // return await httpService.delete(`${ENDPOINT}/${boardId}`)
  return storageService.remove(KEY, boardId)
}

async function save(board) {
  // return board._id
  //   ? await httpService.put(`${ENDPOINT}/${board._id}`, board)
  //   : await httpService.post(ENDPOINT, board)
  return board._id
    ? storageService.put(KEY, board)
    : storageService.post(KEY, board)
}

function getNewBoard() {
  return Promise.resolve({
    name: 'New-board',
    createdAt: new Date(),
  })
}

function _createBoards() {
  let boards = utilService.loadFromStorage(KEY)
  if (!boards || !boards.length) {
    boards = [_createBoard('Board-1')]
    utilService.saveToStorage(KEY, boards)
  }
  return boards
}

function _createBoard(name) {
  return {
    _id: 'b101',
    title: name,
    createdAt: new Date(),
    tokens: [
      {
        name: 'Scottish Terrier',
      },
      {
        name: 'Battleship',
      },
      {
        name: 'race car mid',
      },
      {
        name: 'Top Hat',
      },
      {
        name: 'Penguin',
      },
      {
        name: 'T-Rex',
      },
      {
        name: 'Cat',
      },
      {
        name: 'Rubber Ducky',
      },
    ],
    houses: 32,
    hotels: 12,
    currPLayer: {
      _id: 'p100',
      name: 'player-0',
      position: 0,
      propertyCards: [],
      balance: 2000,
      colorToken: 'blue',
    },
    players: [
      {
        _id: 'p100',
        name: 'player-0',
        position: 0,
        propertyCards: [],
        balance: 2000,
        colorToken: 'blue',
      },
      {
        _id: 'p101',
        name: 'player-1',
        position: 0,
        propertyCards: [],
        balance: 2000,
        colorToken: '#409eff',
      },
    ],
    tiles: [
      {
        name: 'Go',
        players: [
          {
            _id: 'p100',
            name: 'player-0',
            position: 0,
            propertyCards: [],
            balance: 2000,
            colorToken: 'blue',
          },
          {
            _id: 'p101',
            name: 'player-1',
            position: 0,
            propertyCards: [],
            balance: 2000,
            colorToken: '#409eff',
          },
        ],
        owner: null,
        price: 60,
        type: 'go',
      },
      {
        name: 'Mediterranean Avenue',
        players: [],
        owner: null,
        color: '#562e22',
        price: 60,
        type: 'city',
      },
      {
        name: 'Community chest',
        players: [],
        owner: null,
        color: '',
        type: 'communityChest',
      },
      {
        name: 'Baltic Avenue',
        players: [],
        owner: {
          _id: 'p101',
          name: 'player-1',
        },
        color: '#562e22',
        price: 60,
        type: 'city',
      },
      {
        name: 'Income tax',
        players: [],
        owner: null,
        color: '',
        price: 200,
        type: 'tax',
      },
      {
        name: 'Reading Railroad',
        players: [],
        owner: null,
        color: '',
        price: 200,
        type: 'company',
      },
      {
        name: 'Oriental Avenue',
        players: [],
        owner: null,
        color: '#95b8cb',
        price: 100,
        type: 'city',
      },
      {
        name: 'Chance',
        players: [],
        owner: null,
        type: 'chance',
      },
      {
        name: 'Vermont Avenue',
        players: [],
        owner: null,
        color: '#95b8cb',
        price: 100,
        type: 'city',
      },
      {
        name: 'Connecticut Avenue',
        players: [],
        owner: null,
        color: '#95b8cb',
        price: 120,
        type: 'city',
      },
      {
        name: 'jail',
        players: [],
        owner: null,
        type: 'visit',
      },
      {
        name: 'St. Charles Place',
        players: [],
        owner: null,
        color: '#cb5382',
        price: 140,
        type: 'city',
      },
      {
        name: 'Electric Company',
        players: [],
        owner: null,
        color: '',
        price: 140,
        type: 'company',
      },
      {
        name: 'States Avenue',
        players: [],
        owner: null,
        color: '#cb5382',
        price: 140,
        type: 'city',
      },
      {
        name: 'Virginia Avenue',
        players: [],
        owner: null,
        color: '#cb5382',
        price: 160,
        type: 'city',
      },
      {
        name: 'Pennsylvania Railroad',
        players: [],
        owner: null,
        color: '',
        price: 200,
        type: 'company',
      },
      {
        name: 'St. James Place',
        players: [],
        owner: null,
        color: '#ffa600',
        price: 100,
        type: 'city',
      },
      {
        name: 'Community chest',
        players: [],
        owner: null,
        type: 'communityChest',
      },
      {
        name: 'Tennessee Avenue',
        players: [],
        owner: null,
        color: '#ffa600',
        price: 180,
        type: 'city',
      },
      {
        name: 'New York Avenue',
        players: [],
        owner: null,
        color: '#ffa600',
        price: 200,
        type: 'city',
      },

      {
        name: 'Parking',
        players: [],
        owner: null,
        color: '',
        type: 'parking',
      },
      {
        name: 'Kentucky Avenue',
        players: [],
        owner: null,
        color: '#cf3b30',
        price: 220,
        type: 'city',
      },
      {
        name: 'Chance',
        players: [],
        owner: null,
        color: '',
        type: 'chance',
      },
      {
        name: 'Indiana Avenue',
        players: [],
        owner: null,
        color: '#cf3b30',
        price: 220,
        type: 'city',
      },
      {
        name: 'Illinois Avenue',
        players: [],
        owner: null,
        color: '#cf3b30',
        price: 240,
        type: 'city',
      },
      {
        name: 'B. & O. Railroad',
        players: [],
        owner: null,
        color: '',
        price: 200,
        type: 'company',
      },
      {
        name: 'Atlantic Avenue',
        players: [],
        owner: null,
        color: '#d3c11b',
        price: 260,
        type: 'city',
      },
      {
        name: 'Ventnor Avenue',
        players: [],
        owner: null,
        color: '#d3c11b',
        price: 260,
        type: 'city',
      },
      {
        name: 'Water  Works',
        players: [],
        owner: null,
        color: '',
        price: 100,
        type: 'company',
      },

      {
        name: 'Marvin Gardens',
        players: [],
        owner: null,
        color: '#d3c11b',
        price: 280,
        type: 'city',
      },
      {
        name: 'Send To Jail',
        players: [],
        owner: null,
        color: '',
        type: 'jail',
      },
      {
        name: 'Pacific Avenue',
        players: [],
        owner: null,
        color: '#0ab842',
        price: 300,
        type: 'city',
      },
      {
        name: 'North Carolina Avenue',
        players: [],
        owner: null,
        color: '#0ab842',
        price: 300,
        type: 'city',
      },
      {
        name: 'Community chest',
        players: [],
        owner: null,
        color: '',
        type: 'communityChest',
      },
      {
        name: 'Pennsylvania Avenue',
        players: [],
        owner: null,
        color: '#0ab842',
        price: 320,
        type: 'city',
      },
      {
        name: 'Short Line',
        players: [],
        owner: null,
        color: '',
        price: 200,
        type: 'company',
      },
      {
        name: 'Chance',
        players: [],
        owner: null,
        color: '',
        type: 'chance',
      },
      {
        name: 'Park Place',
        players: [],
        owner: null,
        color: '#2863ad',
        price: 350,
        type: 'city',
      },
      {
        name: 'Luxury Tax',
        players: [],
        owner: null,
        color: '',
        price: 75,
        type: 'tax',
      },
      {
        name: 'Boardwalk',
        players: [],
        owner: null,
        color: '#2863ad',
        price: 400,
        type: 'city',
      },
    ],
    cmpsOrder: [
      'startCmp',
      'tileCmp',
      'communityCmp',
      'tileCmp',
      'incomeCmp',
      'railroadCmp',
      'tileCmp',
      'chanceCmp',
      'tileCmp',
      'tileCmp',
      'jailCmp',
      'tileCmp',
      'electricCmp',
      'tileCmp',
      'tileCmp',
      'railroadCmp',
      'tileCmp',
      'communityCmp',
      'tileCmp',
      'tileCmp',
      'parkingCmp',
      'tileCmp',
      'chanceCmp',
      'tileCmp',
      'tileCmp',
      'railroadCmp',
      'tileCmp',
      'tileCmp',
      'waterWorkCmp',
      'tileCmp',
      'sendToJailCmp',
      'tileCmp',
      'tileCmp',
      'communityCmp',
      'tileCmp',
      'railroadCmp',
      'chanceCmp',
      'tileCmp',
      'luxuryTaxCmp',
      'tileCmp',
    ],
    cards: {
      propertyCards: [
        {
          _id: 'property-101',
          title: 'Mediterranean Avenue',
          color: '#562e22',
          price: 60,
          rent: 2,
          oneHouse: 10,
          twoHouses: 30,
          threeHouses: 90,
          fourHouses: 160,
          hotel: 250,
          mortgage: 30,
          houseCost: 50,
          hotelCost: 210,
          hotelCostNotCalc: 50,
          type: 'propertyCard',
        },
        {
          _id: 'property-102',
          title: 'Baltic Avenue',
          color: '#562e22',
          price: 60,
          rent: 4,
          oneHouse: 20,
          twoHouses: 60,
          threeHouses: 180,
          fourHouses: 320,
          hotel: 450,
          mortgage: 30,
          houseCost: 50,
          hotelCost: 370,
          hotelCostNotCalc: 50,
          type: 'propertyCard',
        },

        {
          _id: 'property-103',
          title: 'Oriental Avenue',
          color: '#95b8cb',
          price: 100,
          rent: 6,
          oneHouse: 30,
          twoHouses: 90,
          threeHouses: 270,
          fourHouses: 400,
          hotel: 550,
          mortgage: 50,
          houseCost: 50,
          hotelCost: 450,
          hotelCostNotCalc: 50,
          type: 'propertyCard',
        },
        {
          _id: 'property-104',
          title: 'Vermont Avenue',
          color: '#95b8cb',
          price: 100,
          rent: 6,
          oneHouse: 30,
          twoHouses: 90,
          threeHouses: 270,
          fourHouses: 400,
          hotel: 550,
          mortgage: 50,
          houseCost: 50,
          hotelCost: 450,
          hotelCostNotCalc: 50,
          type: 'propertyCard',
        },
        {
          _id: 'property-105',
          title: 'Connecticut Avenue',
          color: '#95b8cb',
          price: 120,
          rent: 8,
          oneHouse: 40,
          twoHouses: 100,
          threeHouses: 300,
          fourHouses: 450,
          hotel: 600,
          mortgage: 60,
          houseCost: 50,
          hotelCost: 500,
          hotelCostNotCalc: 50,
          type: 'propertyCard',
        },
        {
          _id: 'property-106',
          title: 'St. Charles Place',
          color: '#cb5382',
          price: 140,
          rent: 10,
          oneHouse: 50,
          twoHouses: 150,
          threeHouses: 450,
          fourHouses: 625,
          hotel: 750,
          mortgage: 70,
          houseCost: 100,
          hotelCost: 725,
          hotelCostNotCalc: 50,
          type: 'propertyCard',
        },
        {
          _id: 'property-107',
          title: 'States Avenue',
          color: '#cb5382',
          price: 140,
          rent: 10,
          oneHouse: 50,
          twoHouses: 150,
          threeHouses: 450,
          fourHouses: 625,
          hotel: 750,
          mortgage: 70,
          houseCost: 100,
          hotelCost: 725,
          hotelCostNotCalc: 50,
          type: 'propertyCard',
        },
        {
          _id: 'property-108',
          title: 'Virginia Avenue',
          color: '#cb5382',
          price: 160,
          rent: 12,
          oneHouse: 60,
          twoHouses: 180,
          threeHouses: 500,
          fourHouses: 700,
          hotel: 900,
          mortgage: 80,
          houseCost: 100,
          hotelCost: 800,
          hotelCostNotCalc: 50,
          type: 'propertyCard',
        },

        {
          _id: 'property-109',
          title: 'St. James Place',
          color: '#ffa600',
          price: 100,
          rent: 14,
          oneHouse: 70,
          twoHouses: 200,
          threeHouses: 550,
          fourHouses: 750,
          hotel: 950,
          mortgage: 90,
          houseCost: 100,
          hotelCost: 850,
          hotelCostNotCalc: 50,
          type: 'propertyCard',
        },
        {
          _id: 'property-110',
          title: 'Tennessee Avenue',
          color: '#ffa600',
          price: 180,
          rent: 14,
          oneHouse: 70,
          twoHouses: 200,
          threeHouses: 550,
          fourHouses: 750,
          hotel: 950,
          mortgage: 90,
          houseCost: 100,
          hotelCost: 850,
          hotelCostNotCalc: 50,
          type: 'propertyCard',
        },
        {
          _id: 'property-111',
          title: 'New York Avenue',
          color: '#ffa600',
          price: 200,
          rent: 16,
          oneHouse: 80,
          twoHouses: 220,
          threeHouses: 600,
          fourHouses: 800,
          hotel: 1000,
          mortgage: 100,
          houseCost: 100,
          hotelCost: 900,
          hotelCostNotCalc: 50,
          type: 'propertyCard',
        },
        {
          _id: 'property-112',
          title: 'Kentucky Avenue',
          color: '#cf3b30',
          price: 220,
          rent: 18,
          oneHouse: 90,
          twoHouses: 250,
          threeHouses: 700,
          fourHouses: 875,
          hotel: 1050,
          mortgage: 110,
          houseCost: 150,
          hotelCost: 1025,
          hotelCostNotCalc: 150,
          type: 'propertyCard',
        },
        {
          _id: 'property-113',
          title: 'Indiana Avenue',
          color: '#cf3b30',
          price: 220,
          rent: 18,
          oneHouse: 90,
          twoHouses: 250,
          threeHouses: 700,
          fourHouses: 875,
          hotel: 1050,
          mortgage: 110,
          houseCost: 150,
          hotelCost: 1025,
          hotelCostNotCalc: 150,
          type: 'propertyCard',
        },
        {
          _id: 'property-114',
          title: 'Illinois Avenue',
          color: '#cf3b30',
          price: 240,
          rent: 20,
          oneHouse: 100,
          twoHouses: 300,
          threeHouses: 750,
          fourHouses: 925,
          hotel: 1100,
          mortgage: 120,
          houseCost: 150,
          hotelCost: 1075,
          hotelCostNotCalc: 150,
          type: 'propertyCard',
        },

        {
          _id: 'property-115',
          title: 'Atlantic Avenue',
          color: '#d3c11b',
          price: 260,
          rent: 22,
          oneHouse: 110,
          twoHouses: 330,
          threeHouses: 800,
          fourHouses: 975,
          hotel: 1150,
          mortgage: 130,
          houseCost: 150,
          hotelCost: 1125,
          hotelCostNotCalc: 150,
          type: 'propertyCard',
        },
        {
          _id: 'property-116',
          title: 'Ventnor Avenue',
          color: '#d3c11b',
          price: 260,
          rent: 22,
          oneHouse: 110,
          twoHouses: 330,
          threeHouses: 800,
          fourHouses: 975,
          hotel: 1150,
          mortgage: 130,
          houseCost: 150,
          hotelCost: 1125,
          hotelCostNotCalc: 150,
          type: 'propertyCard',
        },
        {
          _id: 'property-117',
          title: 'Marvin Gardens',
          color: '#d3c11b',
          price: 280,
          rent: 24,
          oneHouse: 120,
          twoHouses: 360,
          threeHouses: 850,
          fourHouses: 1025,
          hotel: 1200,
          mortgage: 140,
          houseCost: 150,
          hotelCost: 1175,
          hotelCostNotCalc: 150,
          type: 'propertyCard',
        },
        {
          _id: 'property-118',
          title: 'Pacific Avenue',
          color: '#0ab842',
          price: 300,
          rent: 26,
          oneHouse: 130,
          twoHouses: 390,
          threeHouses: 900,
          fourHouses: 1100,
          hotel: 1275,
          mortgage: 150,
          houseCost: 200,
          hotelCost: 1300,
          hotelCostNotCalc: 200,
          type: 'propertyCard',
        },
        {
          _id: 'property-119',
          title: 'North Carolina Avenue',
          color: '#0ab842',
          price: 300,
          rent: 26,
          oneHouse: 130,
          twoHouses: 390,
          threeHouses: 900,
          fourHouses: 1100,
          hotel: 1275,
          mortgage: 150,
          houseCost: 200,
          hotelCost: 1300,
          hotelCostNotCalc: 200,
          type: 'propertyCard',
        },
        {
          _id: 'property-120',
          title: 'Pennsylvania Avenue',
          color: '#0ab842',
          price: 320,
          rent: 28,
          oneHouse: 150,
          twoHouses: 450,
          threeHouses: 1000,
          fourHouses: 1200,
          hotel: 1400,
          mortgage: 160,
          houseCost: 200,
          hotelCost: 1400,
          hotelCostNotCalc: 200,
          type: 'propertyCard',
        },

        {
          _id: 'property-121',
          title: 'Park Place',
          color: '#2863ad',
          price: 350,
          rent: 35,
          oneHouse: 175,
          twoHouses: 500,
          threeHouses: 1100,
          fourHouses: 1300,
          hotel: 1500,
          mortgage: 170,
          houseCost: 200,
          hotelCost: 1500,
          hotelCostNotCalc: 200,
          type: 'propertyCard',
        },
        {
          _id: 'property-122',
          title: 'Boardwalk',
          color: '#2863ad',
          price: 400,
          rent: 50,
          oneHouse: 200,
          twoHouses: 600,
          threeHouses: 1400,
          fourHouses: 1700,
          hotel: 2000,
          mortgage: 200,
          houseCost: 200,
          hotelCost: 1900,
          hotelCostNotCalc: 200,
          type: 'propertyCard',
        },
      ],

      utilitiesCards: [
        {
          _id: 'utility-101',
          title: 'Electric Company',
          price: 140,
          rent: '4 * Dice Roll',
          twoAreOwned: '10 * Dice Roll',
          mortgage: 75,
          background: '#cf8e61',
          type: 'utilityCard',
        },
        {
          _id: 'utility-102',
          title: 'Waterworks',
          price: 100,
          rent: '4 * Dice Roll',
          twoAreOwned: '10 * Dice Roll',
          mortgage: 75,
          background: '#f6f4f4',
          type: 'utilityCard',
        },
      ],

      railroadsCards: [
        {
          _id: 'railroad-101',
          title: 'Reading Railroad',
          color: '',
          price: 200,
          rent: 25,
          ifTwoCards: 50,
          ifthreeCards: 100,
          ifFourCards: 200,
          mortgage: 100,
          type: 'readingRailroadCard',
        },
        {
          _id: 'railroad-102',
          title: 'Pennsylvania Railroad',
          color: '',
          price: 200,
          rent: 25,
          ifTwoCards: 50,
          ifthreeCards: 100,
          ifFourCards: 200,
          mortgage: 100,
          type: 'readingRailroadCard',
        },
        {
          _id: 'railroad-103',
          title: 'B. & O. Railroad',
          color: '',
          price: 200,
          rent: 25,
          ifTwoCards: 50,
          ifthreeCards: 100,
          ifFourCards: 200,
          mortgage: 100,
          type: 'readingRailroadCard',
        },
        {
          _id: 'railroad-104',
          title: 'Short Line',
          color: '',
          price: 200,
          rent: 25,
          ifTwoCards: 50,
          ifthreeCards: 100,
          ifFourCards: 200,
          mortgage: 100,
          type: 'readingRailroadCard',
        },
      ],

      communityChestCards: [
        {
          _id: 'community-101',
          title: 'Community Chest',
          description: 'Advance to "Go". (Collect $200) ',
          background: '#ffeb43',
          type: 'communityChestCard',
        },
        {
          _id: 'community-102',
          title: 'Community Chest',
          description: 'Life insurance matures - Collect $100',
          background: '#ffeb43',
          type: 'communityChestCard',
        },
        {
          _id: 'community-103',
          title: 'Community Chest',
          description: 'Get Out of Jail Free. ',
          background: '#ffeb43',
          type: 'communityChestCard',
        },
        {
          _id: 'community-104',
          title: 'Community Chest',
          description:
            'You have won second prize in a beauty contest. Collect $10.',
          background: '#ffeb43',
          type: 'communityChestCard',
        },
        {
          _id: 'community-105',
          title: 'Community Chest',
          description: 'Bank error in your favor. Collect $200. ',
          background: '#ffeb43',
          type: 'communityChestCard',
        },
        {
          _id: 'community-106',
          title: 'Community Chest',
          description: 'From sale of stock you get $50.',
          background: '#ffeb43',
          type: 'communityChestCard',
        },
        {
          _id: 'community-107',
          title: 'Community Chest',
          description: 'Income tax refund. Collect $20. ',
          background: '#ffeb43',
          type: 'communityChestCard',
        },
        {
          _id: 'community-108',
          title: 'Community Chest',
          description: 'Receive for services $25.',
          background: '#ffeb43',
          type: 'communityChestCard',
        },
        {
          _id: 'community-109',
          title: 'Community Chest',
          description: 'You inherit $100.',
          background: '#ffeb43',
          type: 'communityChestCard',
        },
        {
          _id: 'community-110',
          title: 'Community Chest',
          description: 'Holiday Fund matures. Collect $100. ',
          background: '#ffeb43',
          type: 'communityChestCard',
        },
        {
          _id: 'community-111',
          title: 'Community Chest',
          description:
            'Collect $50 from every player for opening night seats. ',
          background: '#ffeb43',
          type: 'communityChestCard',
        },
        {
          _id: 'community-112',
          title: 'Community Chest',
          description: "Doctor's fees. Pay $50.",
          background: '#ffeb43',
          type: 'communityChestCard',
        },
        {
          _id: 'community-113',
          title: 'Community Chest',
          description: 'Pay hospital $100.',
          background: '#ffeb43',
          type: 'communityChestCard',
        },
        {
          _id: 'community-114',
          title: 'Community Chest',
          description: 'Pay school tax of $150',
          background: '#ffeb43',
          type: 'communityChestCard',
        },
        {
          _id: 'community-115',
          title: 'Community Chest',
          description:
            'You are assessed for street repairs: Pay $40 per house and $115 per hotel you own. ',
          background: '#ffeb43',
          type: 'communityChestCard',
        },
        {
          _id: 'community-116',
          title: 'Community Chest',
          description: 'Go to Jail. ',
          background: '#ffeb43',
          type: 'communityChestCard',
        },
      ],

      chanceCards: [
        {
          _id: 'chance-201',
          title: 'Chance',
          description: 'Advance to "Go". (Collect $200) ',
          background: '#ff5c00',
          type: 'chanceCards',
        },
        {
          _id: 'chance-202',
          title: 'Chance',
          description: 'Advance token to Boardwalk.',
          background: '#ff5c00',
          type: 'chanceCards',
        },
        {
          _id: 'chance-203',
          title: 'Chance',
          description: 'Advance to Illinois Ave.',
          background: '#ff5c00',
          type: 'chanceCards',
        },
        {
          _id: 'chance-204',
          title: 'Chance',
          description: 'Advance to St. Charles Place.',
          background: '#ff5c00',
          type: 'chanceCards',
        },
        {
          _id: 'chance-205',
          title: 'Chance',
          description: 'If you pass Go, collect $200.',
          background: '#ff5c00',
          type: 'chanceCards',
        },
        {
          _id: 'chance-206',
          title: 'Chance',
          description:
            'Advance token to the nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total 10 times the amount thrown.',
          background: '#ff5c00',
          type: 'chanceCards',
        },
        {
          _id: 'chance-207',
          title: 'Chance',
          description:
            'Advance token to the nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total 10 times the amount thrown.',
          background: '#ff5c00',
          type: 'chanceCards',
        },
        {
          _id: 'chance-208',
          title: 'Chance',
          description: 'Go Back 3 Spaces.',
          background: '#ff5c00',
          type: 'chanceCards',
        },
        {
          _id: 'chance-209',
          title: 'Chance',
          description: 'Bank pays you dividend of $50. ',
          background: '#ff5c00',
          type: 'chanceCards',
        },
        {
          _id: 'chance-210',
          title: 'Chance',
          description: 'Your building and loan matures. Collect $150. ',
          background: '#ff5c00',
          type: 'chanceCards',
        },
        {
          _id: 'chance-211',
          title: 'Chance',
          description: 'Pay poor tax of $15',
          background: '#ff5c00',
          type: 'chanceCards',
        },
        {
          _id: 'chance-212',
          title: 'Chance',
          description:
            'You have been elected Chairman of the Board. Pay each player $50.',
          background: '#ff5c00',
          type: 'chanceCards',
        },
        {
          _id: 'chance-213',
          title: 'Chance',
          description:
            'Make general repairs on all your property: For each house pay $25, For each hotel {pay} $100.',
          background: '#ff5c00',
          type: 'chanceCards',
        },
        {
          _id: 'chance-214',
          title: 'Chance',
          description: ' Go directly to Jail.',
          background: '#ff5c00',
          type: 'chanceCards',
        },
        {
          _id: 'chance-215',
          title: 'Chance',
          description:
            'Get out of Jail Free. This card may be kept until needed, or traded/sold.',
          background: '#ff5c00',
          type: 'chanceCards',
        },
        {
          _id: 'chance-216',
          title: 'Chance',
          description: 'You have won a crossword competition. Collect $100.',
          background: '#ff5c00',
          type: 'chanceCards',
        },
      ],
    },
  }
}
