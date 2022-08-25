export interface AgendaDay {
  name: string
  date: string
  room: string
  items: AgendaItem[]
}

export type AgendaItem =
  | AgendaCheckIn
  | AgendaTalk
  | AgendaAnnouncement
  | AgendaBreak
  | AgendaPanel
  | AgendaWorkshop
  | AgendaParty

export interface AgendaCheckIn {
  start: string
  end: string
  type: 'check-in'
  title: string
}

export interface AgendaTalk {
  start: string
  end: string
  type: 'talk'
  speakers: string[]
  company: string
  title: string
  link?: string
}

export interface AgendaAnnouncement {
  start: string
  end: string
  type: 'announcement'
  speakers: string[]
  company: string
  title: string
}

export interface AgendaBreak {
  start: string
  end: string
  type: 'break'
  title: string
}

export interface AgendaPanel {
  start: string
  end: string
  type: 'panel'
  host: string
  speakers: string[]
  companies: string[]
  title: string
  link?: string
}

export interface AgendaWorkshop {
  start: string
  end: string
  type: 'workshop'
  speakers: string[]
  company: string
  title: string
}

export interface AgendaParty {
  start: string
  end: string
  type: 'party'
  title: string
  link: string
}

export const agenda: AgendaDay[] = [
  {
    name: 'Day 1',
    date: '2022-04-19',
    room: 'Grote zaal',
    items: [
      {
        start: '09:00',
        end: '10:00',
        type: 'check-in',
        title: 'Doors open at 9:00, please have tickets ready',
      },
      {
        start: '10:00',
        end: '10:30',
        type: 'talk',
        speakers: ['Dankrad Feist'],
        company: 'Ethereum Foundation',
        title: 'Keynote - Still no flying cars, but at least we get rollups',
        link: 'https://www.youtube.com/watch?v=EBK4IHptKZY',
      },
      {
        start: '10:30',
        end: '11:00',
        type: 'talk',
        speakers: ['Bartek Kiepuszewski'],
        company: 'L2BEAT',
        title: 'Introducing Risk Framework 2.0',
        link: 'https://www.youtube.com/watch?v=8TmxR9JJWXw',
      },
      {
        start: '11:00',
        end: '11:15',
        type: 'break',
        title: '☕ Coffee break ☕',
      },
      {
        start: '11:15',
        end: '11:45',
        type: 'panel',
        host: 'Anthony Sassano',
        speakers: [
          'Ed Felten',
          'Ben Jones',
          'Ohad Barta',
          'Alex Gluchowski',
          'John Adler',
        ],
        companies: ['Arbitrum', 'Optimism', 'StarkWare', 'zkSync', 'Fuel Labs'],
        title: 'Are current rollups sufficiently decentralized?',
        link: 'https://www.youtube.com/watch?v=HO693GJZITY',
      },
      {
        start: '11:45',
        end: '12:15',
        type: 'talk',
        speakers: ['Ohad Barta'],
        company: 'StarkWare',
        title: 'The Rise of L2-Native dApps',
        link: 'https://www.youtube.com/watch?v=ODqYGk1ppTA',
      },
      {
        start: '12:15',
        end: '12:45',
        type: 'talk',
        speakers: ['Ed Felten'],
        company: 'Offchain Labs',
        title: 'Rollups and the Future of Ethereum Scaling',
        link: 'https://www.youtube.com/watch?v=mGS8mPWz4xw',
      },
      {
        start: '12:45',
        end: '13:45',
        type: 'break',
        title: '🥪 Lunch break 🥪',
      },
      {
        start: '13:45',
        end: '13:50',
        type: 'announcement',
        speakers: ['Tas Dienes'],
        company: 'Ethereum Foundation',
        title: 'Announcement of a Layer 2 standards group managed by OASIS',
      },
      {
        start: '13:50',
        end: '14:20',
        type: 'talk',
        speakers: ['John Adler'],
        company: 'Fuel Labs',
        title: 'Induced Demand from Blockchain Resource Pricing',
        link: 'https://www.youtube.com/watch?v=_6ctMrlhcO4',
      },
      {
        start: '14:20',
        end: '14:50',
        type: 'talk',
        speakers: ['Aleksandr Vlasov'],
        company: 'Matter Labs',
        title:
          "Internals of Matter Lab's zkEVM - design goals, technical challenges and tricks",
        link: 'https://www.youtube.com/watch?v=XwCwnmeHZlA',
      },
      {
        start: '14:50',
        end: '15:20',
        type: 'talk',
        speakers: ['Alan Chiu'],
        company: 'Boba Network',
        title: 'Hybrid Compute: Realizing the Full Potential of Web3',
        link: 'https://www.youtube.com/watch?v=XnRzWP6FWUs&t=2s',
      },
      {
        start: '15:20',
        end: '15:30',
        type: 'break',
        title: '☕ Coffee break ☕',
      },
      {
        start: '15:30',
        end: '16:00',
        type: 'talk',
        speakers: ['Ben Jones'],
        company: 'Optimism',
        title: "Fire the Cannons: Optimism's Next-Gen Fault Proofs",
        link: 'https://www.youtube.com/watch?v=Xc7JpNRcnXk',
      },
      {
        start: '16:00',
        end: '16:30',
        type: 'talk',
        speakers: ['Yuan Su'],
        company: 'Metis',
        title: 'Decentralizing optimistic rollup',
        link: 'https://www.youtube.com/watch?v=4bZc42PJ07w',
      },
      {
        start: '16:30',
        end: '17:00',
        type: 'talk',
        speakers: ['Hadrien Croubois'],
        company: 'OpenZeppelin',
        title: 'Cross chain operations made easy with OpenZeppelin',
      },
      {
        start: '17:00',
        end: '20:00',
        type: 'party',
        title: '🥂 Open bar at Kanteen25 by zkSync 🥂',
        link: 'https://g.page/kanteen25?share',
      },
    ],
  },
  {
    name: 'Day 2 - ZK Track',
    date: '2022-04-20',
    room: 'Grote zaal',
    items: [
      {
        start: '09:00',
        end: '10:00',
        type: 'check-in',
        title: 'Doors open at 9:00, please have tickets ready',
      },
      {
        start: '10:00',
        end: '10:30',
        type: 'talk',
        speakers: ['Jordi Baylina'],
        company: 'Polygon Hermez',
        title: 'How we are building the zkEVM',
        link: 'https://www.youtube.com/watch?v=T2fH1NlHnAc',
      },
      {
        start: '10:30',
        end: '11:00',
        type: 'talk',
        speakers: ['Chaitanya Konda'],
        company: 'EY',
        title: 'Polygon Nightfall and testnet launch update',
        link: 'https://www.youtube.com/watch?v=F33XyN3B44Q',
      },
      {
        start: '11:00',
        end: '11:15',
        type: 'break',
        title: '☕ Coffee break ☕',
      },
      {
        start: '11:15',
        end: '11:45',
        type: 'talk',
        speakers: ['Brendan Farmer'],
        company: 'Polygon Zero',
        title: 'Building Scalable L2s with ZK',
        link: 'https://www.youtube.com/watch?v=ABfigT4qISc',
      },
      {
        start: '11:45',
        end: '12:15',
        type: 'talk',
        speakers: ['Bobbin Threadbare'],
        company: 'Polygon Miden',
        title: 'Miden VM: the heart of Polygon Miden',
        link: 'https://www.youtube.com/watch?v=S2NfpC8cJog',
      },
      {
        start: '12:15',
        end: '12:45',
        type: 'talk',
        speakers: ['Remco Bloemen'],
        company: 'Worldcoin',
        title: 'Anonymity for a billion people',
        link: 'https://www.youtube.com/watch?v=KAAFqQMnYRg',
      },
      {
        start: '12:45',
        end: '13:45',
        type: 'break',
        title: '🥪 Lunch break 🥪',
      },
      {
        start: '13:45',
        end: '14:15',
        type: 'talk',
        speakers: ['Olivier Begassat', 'Théodore Chapuis-Chkaiban'],
        company: 'ConsenSys',
        title: 'A look into the zk-evm',
        link: 'https://www.youtube.com/watch?v=jSC5fQZlWYQ',
      },
      {
        start: '14:15',
        end: '14:45',
        type: 'talk',
        speakers: ['Ye Zhang'],
        company: 'Scroll Tech',
        title: 'zkEVM challenges and solutions',
        link: 'https://www.youtube.com/watch?v=iB4GCP32Tbo',
      },
      {
        start: '14:45',
        end: '15:15',
        type: 'panel',
        host: 'Justin Drake',
        speakers: [
          'Ye Zhang',
          'Jordi Baylina',
          'Ohad Barta',
          'Alex Gluchowski',
          'Nicolas Liochon',
        ],
        companies: [
          'Scroll Tech',
          'Polygon Hermez',
          'Starkware',
          'zkSync',
          'Consensys',
        ],
        title:
          'Do we need zkEVM equivalence or is EVM compatibility sufficient?',
        link: 'https://www.youtube.com/watch?v=YQJKuwLtzN4',
      },
      {
        start: '15:15',
        end: '15:30',
        type: 'break',
        title: '☕ Coffee break ☕',
      },
      {
        start: '15:30',
        end: '16:00',
        type: 'talk',
        speakers: ['Vitaly Yakovlev'],
        company: 'ZKX',
        title: 'Starknet dApps: How we built DeFi 3.0 with Cairo',
        link: 'https://www.youtube.com/watch?v=v-TsuOxgOqM',
      },
      {
        start: '16:00',
        end: '16:30',
        type: 'talk',
        speakers: ['Julien Niset'],
        company: 'Argent',
        title: 'Why account abstraction on L2 matters',
        link: 'https://www.youtube.com/watch?v=mao08Lx6k-E',
      },
      {
        start: '16:30',
        end: '17:00',
        type: 'talk',
        speakers: ['Alexey Pertsev'],
        company: 'TornadoCash',
        title: 'Finding a production ready L2 solution',
        link: 'https://www.youtube.com/watch?v=rcep9eKe2pg&t=605s',
      },
    ],
  },
  {
    name: 'Day 2 - Beyond Rollups Track',
    date: '2022-04-20',
    room: 'Ijzaal',
    items: [
      {
        start: '09:00',
        end: '10:00',
        type: 'check-in',
        title: 'Doors open at 9:00, please have tickets ready',
      },
      {
        start: '10:00',
        end: '10:30',
        type: 'talk',
        speakers: ['Valeria Yermakova'],
        company: 'Arbitrum',
        title:
          'A history and present-day overview of Ethereum scaling solutions',
        link: 'https://www.youtube.com/watch?v=4cHMSTDW30w',
      },
      {
        start: '10:30',
        end: '11:00',
        type: 'talk',
        speakers: ['Barry Whitehat'],
        company: 'Ethereum Foundation',
        title: 'L2: Our one chance to fix the mistakes of the past',
        link: 'https://www.youtube.com/watch?v=sHt4BJ8o85E',
      },
      {
        start: '11:00',
        end: '11:15',
        type: 'break',
        title: '☕ Coffee break ☕',
      },
      {
        start: '11:15',
        end: '11:45',
        type: 'talk',
        speakers: ['Patrick McCorry'],
        company: 'Infura',
        title: 'A note on bridges and layer-2',
        link: 'https://www.youtube.com/watch?v=WLhYfEpBpiI',
      },
      {
        start: '11:45',
        end: '12:15',
        type: 'talk',
        speakers: ['Vaibhav Chellani'],
        company: 'Socket',
        title: 'True Bridges vs Liquidity Networks',
        link: 'https://www.youtube.com/watch?v=b813V2Oqmfs',
      },
      {
        start: '12:15',
        end: '12:45',
        type: 'talk',
        speakers: ['Will Harborne'],
        company: 'DeversiFi',
        title: 'Rollup Glue - enabling users on L2 to access cross-chain DeFi',
        link: 'https://www.youtube.com/watch?v=MvZwoafIAds',
      },
      {
        start: '12:45',
        end: '13:45',
        type: 'break',
        title: '🥪 Lunch break 🥪',
      },
      {
        start: '13:45',
        end: '14:15',
        type: 'talk',
        speakers: ['Jacobo Toll-Messia'],
        company: 'Nahmii',
        title: 'Improving Rollups: The Power of State Pools',
        link: 'https://www.youtube.com/watch?v=WkDG077MRe4',
      },
      {
        start: '14:15',
        end: '14:45',
        type: 'talk',
        speakers: ['Anton Permenev'],
        company: 'ChainSecurity',
        title: 'DeFi security issues when building on L2s',
        link: 'https://www.youtube.com/watch?v=c6wG-5jSEbM',
      },
      {
        start: '14:45',
        end: '15:15',
        type: 'talk',
        speakers: ['Emily Herbert'],
        company: 'Fuel Labs',
        title: 'Developing Smart Contracts in Sway',
        link: 'https://www.youtube.com/watch?v=Hp4Ln1Xjhhs',
      },
      {
        start: '15:15',
        end: '15:30',
        type: 'break',
        title: '☕ Coffee break ☕',
      },
      {
        start: '15:30',
        end: '16:00',
        type: 'talk',
        speakers: ['Daniel Kmak'],
        company: 'Nervos Network',
        title: 'Optimism beyond Ethereum: EVM in non-EVM chains',
        link: 'https://www.youtube.com/watch?v=rwjbjvtEWng',
      },
      {
        start: '16:00',
        end: '16:30',
        type: 'talk',
        speakers: ['Jacob Caban-Tomski'],
        company: 'Ethereum Foundation',
        title:
          'Gas prices at the L2 pump getting you down? Carpool with BLS Wallet!',
        link: 'https://www.youtube.com/watch?v=sjYLCcYUS2U',
      },
      {
        start: '16:30',
        end: '17:00',
        type: 'talk',
        speakers: ['Faina Shalts'],
        company: 'ConsenSys',
        title:
          "The Layer 2 Tooling Landscape: Where We Are and Where We're (Hopefully) Going",
        link: 'https://www.youtube.com/watch?v=o7GTqi9baFY',
      },
    ],
  },
  {
    name: 'Day 2 - Workshops & Discussions',
    date: '2022-04-20',
    room: 'Studio',
    items: [
      {
        start: '09:00',
        end: '10:00',
        type: 'check-in',
        title: 'Doors open at 9:00, please have tickets ready',
      },
      {
        start: '10:00',
        end: '11:00',
        type: 'workshop',
        speakers: ['Pavel Sinelnikov'],
        company: 'Metis',
        title: 'Building on Chainstarters',
      },
      {
        start: '11:00',
        end: '11:15',
        type: 'break',
        title: '☕ Coffee break ☕',
      },
      {
        start: '11:15',
        end: '12:45',
        type: 'panel',
        host: 'Tim Beiko',
        speakers: [
          'Kelvin Fichter',
          'Diederik Loerakker',
          'Marius Van Der Wijden',
          'Guillaume Ballet',
        ],
        companies: ['Optimism', 'Geth'],
        title: 'L1 and L2 Dev session',
      },
      {
        start: '12:45',
        end: '13:45',
        type: 'break',
        title: '🥪 Lunch break 🥪',
      },
      {
        start: '13:45',
        end: '15:15',
        type: 'workshop',
        speakers: ['Alex Gluchowski'],
        company: 'Matter Labs',
        title: 'zkSync 2.0 for Builders',
      },
      {
        start: '15:15',
        end: '15:30',
        type: 'break',
        title: '☕ Coffee break ☕',
      },
      {
        start: '15:30',
        end: '17:00',
        type: 'workshop',
        speakers: ['Joe Andrews'],
        company: 'Aztec',
        title: 'Building Private Defi in 100 lines of code with Aztec Connect',
      },
    ],
  },
]
