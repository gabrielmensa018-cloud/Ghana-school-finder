const params = new URLSearchParams(window.location.search);
const schoolIndex = Number(params.get("id"));
const school = window.schoolDirectory?.[schoolIndex];
const target = document.getElementById("schoolProfile");
const safe = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const initials = name => name.split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0]).join("").toUpperCase();

if (!school || !Number.isInteger(schoolIndex)) {
  document.title = "School not found | Ghana School Finder";
  target.innerHTML = `<div class="profile-empty"><h1>School not found</h1><p>We couldn't find that school profile in this starter directory.</p><a class="modal-link" href="index.html#schools">Return to school search</a></div>`;
} else {
  document.title = `${school.name} | Ghana School Finder`;
  const website = school.website ? `<a class="modal-link" href="${safe(school.website)}" target="_blank" rel="noopener">Visit official website ↗</a>` : `<p class="profile-muted">Official website: Not added yet.</p>`;
  target.innerHTML = `
    <div class="profile-heading">
      <div class="profile-logo" aria-label="Temporary initials badge">${safe(initials(school.name))}</div>
      <div><span class="school-type">${safe(school.type)}</span><h1>${safe(school.name)}</h1><p>${safe(school.location)} · ${safe(school.region)} Region</p></div>
    </div>
    <div class="profile-details">
      <h2>About this school</h2>
      <p>${safe(school.description)}</p>
      <h2>School information</h2>
      <dl><div><dt>School name</dt><dd>${safe(school.name)}</dd></div><div><dt>Institution type</dt><dd>${safe(school.type)}</dd></div><div><dt>Region</dt><dd>${safe(school.region)}</dd></div><div><dt>Location</dt><dd>${safe(school.location)}</dd></div></dl>
      <div class="profile-actions">${website}<a class="outline-link" href="index.html#schools">Find another school</a></div>
    </div>
    <p class="profile-muted">Logo note: this initials badge is a placeholder, not the school's official logo. An official logo can be added after it has been verified.</p>`;
}
