using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TMPUSApp.Controllers
{
    public class AdminController : Controller
    {
        // GET: Admin
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Login()
        {
            return View();
        }
        public ActionResult Dashboard()
        {
            return View();
        }
        public ActionResult TestSmartWizard()
        {
            return View();
        }

        /// <summary>
        /// Written by Syed Suhail Pasha
        /// </summary>
        /// <returns></returns>
        public ActionResult Users()
        {
            return View();
        }
        /// <summary>
        /// Written by Syed Suhail Pasha
        /// </summary>
        /// <param name="id">if 0 then new user else edit user</param>
        /// <returns></returns>
        public ActionResult EditUser(long? id)
        {

            ViewBag.id = id.HasValue ? id : 0;
            return View();
        }

    }
}