using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TMPUSApp.Controllers
{
    public class UsersController : Controller
    {
        // GET: Users
        public ActionResult SignIn()
        {
            return View();
        }

        public ActionResult SignOut()
        {
            return View();
        }

        public ActionResult ResetPassword()
        {
            return View();
        }
        
        public ActionResult ForgetPassword()
        {
            return View();
        }
    }
}