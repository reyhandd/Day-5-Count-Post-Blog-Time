let pushProject = []

function addBlog(event) {
  event.preventDefault()

  let name = document.getElementById("name").value
  let startDate = document.getElementById("start-date").value
  let endDate = document.getElementById("end-date").value
  let message = document.getElementById("message").value  
  let image = document.getElementById("upload")
  
  image = URL.createObjectURL(image.files[0]);
  
  // Calendar
  function countDuration(startDate, endDate) {
    const result =
      startDate.getMonth() -
      endDate.getMonth() +
      12 * (endDate.getFullYear() - startDate.getFullYear());
  
    return Math.abs(result);
  }
  // ---------------------------------------------------------------------------------


// Checkbox
checkedValue = [];
let technologyProject = document.getElementsByClassName('checkboxProject');
let data = technologyProject.length
for (var i = 0; i < data; i++) {
    if (technologyProject[i].checked == true) {
        checkedValue.push(technologyProject[i].value)
    }
}
  // ----------------------------------------------------------------------------------------

  let project = {
    name,
    duration: countDuration(new Date(startDate), new Date(endDate)),
    message,
    image,
    checkedValue,
  };

  pushProject.push(project)
  domInner()
}

function domInner() {
  let content = document.getElementById("project-blog");
  content.innerHTML = "" 

  for (i = 0; i < pushProject.length; i++) {
    content.innerHTML += `
    <div class="post">
                  <a href="project-main.html"><img src="${pushProject[i].image}" alt=""></a>
                    <h3>${pushProject[i].name}</h3>
                    <p class="duration">duration : ${pushProject[i].duration} month</p>
                    <div class="desc"><p>${pushProject[i].message}</p></div>
                    <div id="icon-tech" class="icon-tech">
                      ${(function domInner() {
                        let string = ""
                        for (let j = 0; j < pushProject[i].checkedValue.length; j++) {
                      
                          string += `<div class="itemIcon">
                          <i class="${pushProject[i].checkedValue[j]}"></i>
                          </div> `
                        }
                        return string
                      })()}
                    </div>
                    <div class="btn-post">
                        <a href="project-main.html"><button type="button" class="edit-btn">edit</button></a>
                        <button type="button" class="delete-btn">delete</button>
                    </div>
            </div>
    `
  }
}
