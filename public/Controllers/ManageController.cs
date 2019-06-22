using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TMPUSApp.Controllers
{
    public class ManageController : Controller
    {
        // GET: Manage
        public ActionResult Index()
        {
            return View();
        }


        public ActionResult Search()
        {
            return View();
        }

        public ActionResult Search2()
        {
            return View();
        }

        public ActionResult ProcessQuality()
        {
            return View();
        }

        public ActionResult Plant()
        {
            return View();
        }

        public ActionResult BarcodeScanner()
        {
            return View();
        }

        public ActionResult DispatchReport()
        {
            return View();
        }

        public ActionResult Areas(long id)
        {
            ViewBag.id = id;
            return View();
        }

    }
}