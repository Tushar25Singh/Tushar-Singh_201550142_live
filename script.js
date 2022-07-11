display = () => {
    const d = new Date();
    const todaydate = d.toString().substr(0, 15);
    bodystr = ``;
    bodystr = `${bodystr}<div id="container"><span><b>Tushar Singh</b></span>
    <span><b>201550142</b></span>
    <span><b>GLA UNIVERSITY MATHURA</b></span>
    <span><b>${todaydate}</b></span></div>`;
    document.getElementById('footer').innerHTML = bodystr;
}