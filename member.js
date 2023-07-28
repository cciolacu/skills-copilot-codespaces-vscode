function skillsMember () {
  var member = this;
  var skills = member.skills;
  var skillsList = document.createElement('ul');
  skillsList.classList.add('skills-list');
  skills.forEach(function (skill) {
    var skillItem = document.createElement('li');
    skillItem.classList.add('skill-item');
    skillItem.innerHTML = skill;
    skillsList.appendChild(skillItem);
  });
  return skillsList;
}