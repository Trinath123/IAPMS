/****************************************************************************
* Project Name	: TMPUSWebService
* Module Name	: BreakdownController
* Page Name     : BreakdownController.cs
* Author        : M N Babu
* Date          : 18-Jan-2019
* Description   : BreakdownController.cs is a class used for Manage Breakdown module.
*****************************************************************************
* * History
*----Version----||-----Date-------||----Modified By--||Description

*****************************************************************************/
using System.Web.Mvc;

namespace TMPUSApp.Controllers
{
    public class BreakdownController : Controller
    {
        #region Action Methods
        /// <summary>
        /// Get Breakdown view
        /// </summary>
        /// <returns></returns>
        public ActionResult Breakdown()
        {
            return View();
        }

        public ActionResult Breakdown_Old()
        {
            return View();
        }

        /// <summary>
        /// Get Breakdown report view
        /// </summary>
        /// <returns></returns>
        public ActionResult BreakdownReport()
        {
            return View();
        }

        /// <summary>
        /// Get Breakdown Create view
        /// </summary>
        /// <returns></returns>
        public ActionResult BreakdownCreateIssue()
        {
            return View();
        }
        #endregion
    }
}