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


  
  let project = {
    name,
    duration: countDuration(new Date(startDate), new Date(endDate)),
    message,
    image,
    technologies: filterChecboxChecked(),
  }
  
  pushProject.push(project)
  domInner()
}

// Checkbox
function filterChecboxChecked() {
  const checkboxChecked = document.querySelectorAll(
    ".checkbox_group input[type='checkbox']:checked"
  );

  let cbValue = [];

  for (let i = 0; i < checkboxChecked.length; i++) {
    cbValue.push(checkboxChecked[i].value);
  }

  return cbValue;
}

  // ----------------------------------------------------------------------------------------

function domInner() {
  console.log(pushProject)

  let content = document.getElementById("project-blog");
  content.innerHTML = "" 

  for (let i = 0; i < pushProject.length; i++) {
    const techs = pushProject[i].technologies;
    content.innerHTML += `
    <div class="post">
                  <a href="project-main.html"><img src="${pushProject[i].image}" alt=""></a>
                    <h3>${pushProject[i].name}</h3>
                    <p class="duration">duration : ${pushProject[i].duration} month</p>
                    <div class="desc"><p>${pushProject[i].message}</p></div>
                    <div id="icon-tech" class="icon-tech">
                    ${techs[0] ? `<i class="fa-brands fa-${techs[0]}"></i>` : ""}
                    ${techs[1] ? `<i class="fa-brands fa-${techs[1]}"></i>` : ""}
                    ${techs[2] ? `<i class="fa-brands fa-${techs[2]}"></i>` : ""}
                    ${techs[3] ? `<i class="fa-brands fa-${techs[3]}"></i>` : ""}
                    </div>
                    <div class="btn-post">
                        <a href="project-main.html"><button type="button" class="edit-btn">edit</button></a>
                        <button type="button" class="delete-btn">delete</button>
                    </div>
            </div>
    `
  }
}
