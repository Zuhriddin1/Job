let jobSections = document.getElementById("job-sections");
let cards = document.getElementById("card");

var jobs = "";
var tags = "";
function createEachTable(item) {
  return `<div
          class="flex relative mt-[79px] ml-[250px] w-[1120px] pt-[32px] pl-[35px] pb-[32px] rounded-[5px] shadow-lg shadow-indigo-500/40"
        >
          <img src="${item.logo}" alt="" />
          <span class="translate-x-1 text-[#5CA5A5] text-[17px]"
            >${item.company}</span
          >
          <button
            class="absolute right-[205px] translate-x-[-650px] text-white pt-[5px] pl-[8px] pr-[8px] pb-[3px] rounded-[12px] bg-[#5CA5A5] uppercase"
          >
            NEW
          </button>
          <button
            class="absolute left-[280px] top-[33px] uppercase rounded-[12px] bg-[#2B3939] pt-[5px] pl-[8px] pr-[7px] pb-[3px] text-white"
          >
            FEATURED
          </button>
          <p
            class="pt-10 translate-x-[-50px] text-[#2B3939] text-[20px] font-bold"
          >
            ${item.position}
          </p>
          <button
            class="pl-[100px] text-[#5CA5A5] rounded-[12px] border-[#5CA5A5] font-mono font-semibold"
          >
            ${item.role}
          </button>
          <button
            class="pl-[100px] text-[#5CA5A5] rounded-[12px] border-[#5CA5A5] font-mono font-semibold"
          >
            ${item.level}
          </button>
          
          ${item?.languages?.map((itm) => {
            return `<button onclick="getTag('${itm}')" class="pl-[100px] text-[#5CA5A5] rounded-[12px] border-[#5CA5A5] font-mono font-semibold">
              ${itm}
            </button>`;
          })}
        </div>`;
}
async function createTable(filtered) {
  jobs = "";
  const url = "http://localhost:3000/data";
  const res = await fetch(url);
  const data = await res.json();
  if (filtered) {
    data &&
      data.map((item) => {
        if (item.languages.includes(filtered)) {
          createEachTable(item);
          jobs += createEachTable(item);
        }
      });
  } else {
    data &&
      data.map((item) => {
        createEachTable(item);
        jobs += createEachTable(item);
      });
  }
  jobSections.innerHTML = jobs;
}

createTable();

function getTag(itm) {
  tags += `<div class='bg-[#5CA5A5] flex items-center my-4 mx-2 p-2 gap-4'> 
  <button class= "pt-[0px] text-[#5CA5A5]">${itm}<button/>
  <button class="bg-white p-2">x</button>
  </div>
  `;
  cards.innerHTML = tags;
  createTable(itm);
}
