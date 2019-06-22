/****************************************************************************
* Project Name	: TMPUSWebService
* Module Name	: PreventiveController
* Page Name     : PreventiveController.cs
* Author        : M N Babu
* Date          : 03-Jan-2019
* Description   : PreventiveController.cs is a class used for Manage preventive module.
*****************************************************************************
* * History
*----Version----||-----Date-------||----Modified By--||Description

*****************************************************************************/
using System.Web.Mvc;

namespace TMPUSApp.Controllers
{
    public class PreventiveController : Controller
    {
        #region Action methods
        /// <summary>
        /// Get preventive view
        /// </summary>
        /// <returns></returns>
        public ActionResult Preventive()
        {
            return View();
        }

        /// <summary>
        /// get preventive report view
        /// </summary>
        /// <returns></returns>
        public ActionResult PreventiveReport()
        {
            return View();
        }
        #endregion
    }
}