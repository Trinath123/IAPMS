using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TMPUSApp.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult General()
        {
            return View();
        }

        public ActionResult ChangePassword()
        {
            return View();
        }
    }
}