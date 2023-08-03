const minions = [
    {
        "data": [
            {
                "id": "1",
                "name": "Camden Schumm",
                "title": "Corporate Intranet Administrator",
                "weaknesses": "Unable to execute holistic flexibility, Cannot do one-to-one data-warehouse, Unable to execute synergistic frame, too back-end",
                "salary": 40000
            },
            {
                "id": "2",
                "name": "Dusty Ortiz",
                "title": "Product Intranet Producer",
                "weaknesses": "Unable to execute sexy adapter, Unable to execute revolutionary pricing structure, Will not build global open architecture, too multi-byte",
                "salary": 40000
            },
            {
                "id": "3",
                "name": "Libby Legros",
                "title": "Customer Metrics Producer",
                "weaknesses": "Cannot do vertical alliance, Cannot do cutting-edge emulation, Cannot do e-business knowledge base, too primary",
                "salary": 40000
            },
            {
                "id": "4",
                "name": "Margot Botsford",
                "title": "Regional Infrastructure Representative",
                "weaknesses": "Cannot do proactive internet solution, Will not build real-time local area network, Unable to execute best-of-breed groupware, too virtual",
                "salary": 40000
            },
            {
                "id": "5",
                "name": "Colton Prohaska",
                "title": "Chief Identity Strategist",
                "weaknesses": "Unable to execute next-generation application, Unable to execute wireless installation, Cannot do 24/365 task-force, too neural",
                "salary": 40000
            },
            {
                "id": "6",
                "name": "Dayana Reilly",
                "title": "Dynamic Brand Planner",
                "weaknesses": "Will not build visionary projection, Will not build strategic instruction set, Will not build extensible algorithm, too online",
                "salary": 40000
            },
            {
                "id": "7",
                "name": "Garfield Stracke",
                "title": "Product Applications Producer",
                "weaknesses": "Cannot do wireless model, Unable to execute wireless product, Will not build cross-platform encoding, too solid state",
                "salary": 40000
            },
            {
                "id": "8",
                "name": "Andreane Daugherty IV",
                "title": "Direct Implementation Supervisor",
                "weaknesses": "Cannot do e-business circuit, Unable to execute cross-media function, Will not build one-to-one capacity, too virtual",
                "salary": 40000
            },
            {
                "id": "9",
                "name": "Asha Herman",
                "title": "Product Accountability Producer",
                "weaknesses": "Unable to execute transparent forecast, Unable to execute robust challenge, Unable to execute viral database, too solid state",
                "salary": 40000
            },
            {
                "id": "10",
                "name": "Miss Sandra Murray",
                "title": "Dynamic Response Developer",
                "weaknesses": "Unable to execute extensible throughput, Cannot do clicks-and-mortar middleware, Will not build compelling benchmark, too multi-byte",
                "salary": 40000
            }
        ],
        "nextId": 11
    }
]

const middleware = { name: 'Test', description: 'Test', numWeeks: 4, weeklyRevenue: '/&' }

const {weeklyRevenue, numWeeks} = middleware
const totalYield = weeklyRevenue * numWeeks
//console.log(typeof totalYield)
//if (totalYield === 0 || isNaN(totalYield) || totalYield < 1000000){
    //console.log('total yield =',totalYield)
//}
//console.log(totalYield)
//console.log(typeof middleware.numWeeks)



const work = { title: 'Test', description: '', hours: 20, minionId: '2', id: '11' }
const work2 = undefined
if ( work2 === null){
    console.log('hello')
}