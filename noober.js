window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  
  // Creat a variable for all the rides

  let ridesMasterData = json

  // Loop through the rides data

  for (i=0; i < ridesMasterData.length; i++) {

    // Create a variable to store each ride in memory
    let rideData = ridesMasterData[i]
  
    // Create a variable for the HTML element we're going to add
    let rideList = document.querySelector(`.rides`)

    // Insert HTML into the rides element, using the data from each ride

    // Setting the condition and inserting HTML for Noober Purple
    if (rideData.purpleRequested == true) {

    rideList.insertAdjacentHTML(`beforeend`, `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>Noober Purple</span>
  </h1>
  <div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${rideData.passengerDetails.first} ${rideData.passengerDetails.last}</h2>
        <p class="font-bold text-gray-600">${rideData.passengerDetails.phoneNumber}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
          ${rideData.numberOfPassengers} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${rideData.address}</p>
        <p>${rideData.pickupLocation.city}, ${rideData.pickupLocation.state} ${rideData.pickupLocation.zip}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${rideData.dropoffLocation.address}</p>
        <p>${rideData.dropoffLocation.city}, ${rideData.dropoffLocation.state} ${rideData.dropoffLocation.zip}</p>
      </div>
    </div>
  </div>
`)  
    }

    // Setting the condition and inserting HTML for Noober XL
  else if (rideData.purpleRequested != true && rideData.numberOfPassengers >3){
    rideList.insertAdjacentHTML(`beforeend`, `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-500">
    <i class="fas fa-car-side"></i>
    <span>Noober XL</span>
  </h1>
  <div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${rideData.passengerDetails.first} ${rideData.passengerDetails.last}</h2>
        <p class="font-bold text-gray-600">${rideData.passengerDetails.phoneNumber}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
          ${rideData.numberOfPassengers} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${rideData.address}</p>
        <p>${rideData.pickupLocation.city}, ${rideData.pickupLocation.state} ${rideData.pickupLocation.zip}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${rideData.dropoffLocation.address}</p>
        <p>${rideData.dropoffLocation.city}, ${rideData.dropoffLocation.state} ${rideData.dropoffLocation.zip}</p>
      </div>
    </div>
  </div>
`)
  }

    // Setting the condition and inserting HTML for Noober X
  else if (rideData.purpleRequested != true && rideData.numberOfPassengers <4){
    rideList.insertAdjacentHTML(`beforeend`, `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500">
    <i class="fas fa-car-side"></i>
    <span>Noober X</span>
  </h1>
  <div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${rideData.passengerDetails.first} ${rideData.passengerDetails.last}</h2>
        <p class="font-bold text-gray-600">${rideData.passengerDetails.phoneNumber}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
          ${rideData.numberOfPassengers} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${rideData.address}</p>
        <p>${rideData.pickupLocation.city}, ${rideData.pickupLocation.state} ${rideData.pickupLocation.zip}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${rideData.dropoffLocation.address}</p>
        <p>${rideData.dropoffLocation.city}, ${rideData.dropoffLocation.state} ${rideData.dropoffLocation.zip}</p>
      </div>
    </div>
  </div>
`)}
}
})