<script>
  export let names;
</script>

<div
  class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
  <div class="flex items-center justify-between mb-4">
    <div class="space-y-1">
      <h2 class="text-xl font-semibold">List of Users</h2>
      <p class="text-sm text-gray-500">
        Fetched {names.length} users
      </p>
    </div>
  </div>
  <div class="divide-y divide-gray-900/5">
    {#each names as user (user.id)}
      <div class="flex items-center justify-between py-3">
        <div class="flex items-center space-x-4">
          <div class="flex">
            <p class="font-medium pt-1 leading-none">{user.name}</p>
            <p class="font-medium pl-5 text-gray-500 pt-0">{user.email}</p>
          </div>
        </div>
        <form method="POST" action="/profiles?/delete">
          <input type="hidden" name="id" id="id" value={user.id} />
          <button type="submit">
            <img class="w-4 float-right" src="./trash-can.svg" alt="delete" />
          </button>
        </form>

        <div
          class="mt-5 pt-5 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
        >
          <form method="POST" action="/profiles?/update">
            <input type="hidden" name="id" id="id" value={user.id} />
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  name="name"
                />
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  Email
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="text"
                  placeholder="Enter email"
                  name="email"
                />
              </div>
              <!-- <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
							  Email
							</label>
						  </div> -->
              <button
                type="submit"
                class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-2 rounded"
              >
                Edit Applicant Details
              </button>
            </div>
          </form>
          <!-- {#if form?.success} -->
          <!-- this message is ephemeral; it exists because the page was rendered in
						   response to a form submission. it will vanish if the user reloads -->
          <!-- <p class="pt-2">Edited the details!</p> -->
          <!-- {/if} -->
        </div>
      </div>
    {/each}
  </div>
</div>
