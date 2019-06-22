using iTextSharp.text;
using iTextSharp.text.html.simpleparser;
using iTextSharp.text.pdf;
using LitJson;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;
using System.Web.Mvc;
using TMPUSApp.Models;
using System.Configuration;

namespace TMPUSApp.Controllers
{
    public class TMPUSController : Controller
    {
        // GET: TMPUS
        public ActionResult Dashboard()
        {
            return View();
        }
        // GET: TMPUS PreventiveIssues
        public ActionResult PreventiveIssues()
        {


            return View();
        }

        // GET: TMPUS PreventiveIssues
        public ActionResult PreventiveReport()
        {
            string path = TempData["path"] as string;

            if (!string.IsNullOrEmpty(path))
            {
                ViewBag.DownloadPath = path;
            }

            return View();
        }

        public ActionResult BreakDownIssues()
        {
            return View();
        }

        public ActionResult BreakDownIssuesReport()
        {
            return View();
        }

        [HttpPost]
        public ActionResult DownloadBreakdownPDF()
        {
            string url = ConfigurationManager.AppSettings["EndPointURL"].ToString();
            string userAuthenticationURI = url + "api/TMPUS/GetBreakdownReport";

            ASCIIEncoding encoder = new ASCIIEncoding();
            var token = Request["token"];
            var fromDate = Request["FromDate"];
            var toDate = Request["ToDate"];
            string serializedObject = "{'FeatureID':1,'FromDate':'" + fromDate + "','ToDate':'" + toDate + "'}";
            byte[] data = encoder.GetBytes(serializedObject);

            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(userAuthenticationURI);
            request.Method = "POST";
            request.ContentType = "application/json";
            request.Headers.Add("token", token);
            request.ContentLength = data.Length;
            //WebResponse response = request.GetResponse();
            request.GetRequestStream().Write(data, 0, data.Length);

            HttpWebResponse response = request.GetResponse() as HttpWebResponse;

            List<BreakedownMasterModel> lstBreakedownMasterModel = new List<BreakedownMasterModel>();

            using (var reader = new StreamReader(response.GetResponseStream()))
            {
                var ApiStatus = reader.ReadToEnd();

                JsonData dataaaa = JsonMapper.ToObject(ApiStatus);
                JsonData[] jsonDataArray = dataaaa["ResponseData"].OfType<JsonData>().ToArray();

                for (int i = 0; i < jsonDataArray.Length - 1; i++)
                {
                    BreakedownMasterModel objBreakedownMasterModel = new BreakedownMasterModel();
                    JsonData BreakdownMaster = jsonDataArray[i]["breakedownMaster"];

                    objBreakedownMasterModel.ID = Convert.ToInt64(BreakdownMaster["ID"].ToString());
                    objBreakedownMasterModel.BreakdownIssueID = BreakdownMaster["BreakdownIssueID"].ToString();
                    objBreakedownMasterModel.IssueDescription = BreakdownMaster["IssueDescription"] == null ? string.Empty : BreakdownMaster["IssueDescription"].ToString();
                    objBreakedownMasterModel.ToolID = Convert.ToInt64(BreakdownMaster["ToolID"].ToString());
                    objBreakedownMasterModel.IssueRaisedDateTime = Convert.ToDateTime(BreakdownMaster["IssueRaisedDateTime"].ToString());
                    objBreakedownMasterModel.Issuestatus = BreakdownMaster["Issuestatus"].ToString();
                    lstBreakedownMasterModel.Add(objBreakedownMasterModel);

                }
            }

            string path = "";

            using (System.IO.MemoryStream memoryStream = new System.IO.MemoryStream())
            {
                Document document = new Document(PageSize.A4, 10, 10, 10, 10);
                BreakdownMaintenance_ITextSharpEvents itextSharpEvents = new BreakdownMaintenance_ITextSharpEvents();
                PdfWriter writer = PdfWriter.GetInstance(document, memoryStream);
                writer.PageEvent = itextSharpEvents;
                document.Open();

                PdfPTable Info = new PdfPTable(1);
                Paragraph paraData = new Paragraph("Data From: " + fromDate + "To: " + toDate);
                Info.AddCell(new PdfPCell(paraData));
                document.Add(Info);


                PdfPTable table = new PdfPTable(5);
                table.AddCell("ID");
                table.AddCell("Description");
                table.AddCell("Tool ID");
                table.AddCell("Date");
                table.AddCell("Status");
                foreach (BreakedownMasterModel item in lstBreakedownMasterModel)
                {
                    table.AddCell(item.BreakdownIssueID.ToString());
                    table.AddCell(item.IssueDescription.ToString());
                    table.AddCell(item.ToolID.ToString());
                    table.AddCell(item.IssueRaisedDateTime.ToString());
                    table.AddCell(item.Issuestatus.ToString());
                }

                document.Add(table);
                //Phrase phrase = new Phrase("This is from Phrase.");
                //document.Add(phrase);

                //Paragraph para = new Paragraph("This is from paragraph.");
                //document.Add(para);

                //string text = @"you are successfully created PDF file.";
                //Paragraph paragraph = new Paragraph();
                //paragraph.SpacingBefore = 10;
                //paragraph.SpacingAfter = 10;
                //paragraph.Alignment = Element.ALIGN_LEFT;
                //paragraph.Font = FontFactory.GetFont(FontFactory.HELVETICA, 12f, BaseColor.GREEN);
                //paragraph.Add(text);
                //document.Add(paragraph);

                Random r = new Random(121);
                string fileName = Convert.ToDateTime(fromDate).ToString("MMddyyyy") + "-" + Convert.ToDateTime(toDate).ToString("MMddyyyy") + "-Preventive Maintenance" + r.Next() + ".pdf";
                document.Close();
                byte[] bytes = memoryStream.ToArray();
                memoryStream.Close();
                var testFile = Path.Combine(Server.MapPath("~/Download"), fileName);
                System.IO.File.WriteAllBytes(testFile, bytes);
                path = "/Download/" + fileName;

            }
            TempData["path"] = path;
            return RedirectToAction("PreventiveReport");
        }





        [HttpPost]
        public ActionResult DownloadPreventivePDF()
        {
            string url = ConfigurationManager.AppSettings["EndPointURL"].ToString();
            string userAuthenticationURI = url + "api/TMPUS/GetPreventiveReport";

            ASCIIEncoding encoder = new ASCIIEncoding();
            var token = Request["token"];
            var fromDate = Request["FromDate"];
            var toDate = Request["ToDate"];
            string serializedObject = "{'FeatureID':1,'FromDate':'" + fromDate + "','ToDate':'" + toDate + "'}";
            byte[] data = encoder.GetBytes(serializedObject);

            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(userAuthenticationURI);
            request.Method = "POST";
            request.ContentType = "application/json";
            request.Headers.Add("token", token);
            request.ContentLength = data.Length;
            //WebResponse response = request.GetResponse();
            request.GetRequestStream().Write(data, 0, data.Length);

            HttpWebResponse response = request.GetResponse() as HttpWebResponse;

            List<PreventiveMasterModel> lstPreventiveMasterModel = new List<PreventiveMasterModel>();

            using (var reader = new StreamReader(response.GetResponseStream()))
            {
                var ApiStatus = reader.ReadToEnd();

                JsonData dataaaa = JsonMapper.ToObject(ApiStatus);
                JsonData[] jsonDataArray = dataaaa["ResponseData"].OfType<JsonData>().ToArray();

                for (int i = 0; i < jsonDataArray.Length - 1; i++)
                {
                    PreventiveMasterModel objPreventiveMasterModel = new PreventiveMasterModel();
                    JsonData PreventiveMaster = jsonDataArray[i]["PreventiveMaster"];

                    objPreventiveMasterModel.ID = Convert.ToInt64(PreventiveMaster["ID"].ToString());
                    objPreventiveMasterModel.IssueID = PreventiveMaster["PreventiveIssueID"].ToString();
                    objPreventiveMasterModel.Description = PreventiveMaster["IssueDescription"] == null ? string.Empty : PreventiveMaster["IssueDescription"].ToString();
                    objPreventiveMasterModel.ToolID = PreventiveMaster["fk_ToolID"].ToString();
                    objPreventiveMasterModel.IssueRaisedTime = Convert.ToDateTime(PreventiveMaster["IssueRaisedDateTime"].ToString());
                    objPreventiveMasterModel.Status = PreventiveMaster["Status"].ToString();
                    lstPreventiveMasterModel.Add(objPreventiveMasterModel);

                }
            }

            string path = "";

            using (System.IO.MemoryStream memoryStream = new System.IO.MemoryStream())
            {
                Document document = new Document(PageSize.A4, 10, 10, 10, 10);
                document.SetPageSize(PageSize.A4.Rotate());

                PreventiveMaintenance_ITextSharpEvents itextSharpEvents = new PreventiveMaintenance_ITextSharpEvents();

                PdfWriter writer = PdfWriter.GetInstance(document, memoryStream);
                writer.PageEvent = itextSharpEvents;
                document.Open();


                //String imageFile = Server.MapPath("~") + "Images\\Bosch-LifeClip-EN-4C-Left1.jpg";
                //Image jpg = iTextSharp.text.Image.GetInstance(imageFile);
                //jpg.ScaleAbsolute(120f, 50f);

                //PdfPTable tableHeader = new PdfPTable(3);
                //tableHeader.AddCell(new PdfPCell(jpg));


                //BaseFont bf = BaseFont.CreateFont(BaseFont.HELVETICA, BaseFont.CP1252, BaseFont.NOT_EMBEDDED);
                //Font font = new Font(bf, 15, Font.NORMAL);

                ////Paragraph para = new Paragraph("Preventive Maintenance Report");
                ////para.Font = FontFactory.GetFont(FontFactory.HELVETICA, 500f, BaseColor.GREEN);
                ////para.SpacingBefore = 10;
                //tableHeader.AddCell(new PdfPCell(new Phrase("Preventive Maintenance Report", font)));

                //Paragraph paraData = new Paragraph("Date: " + DateTime.Now.ToString());
                //tableHeader.AddCell(new PdfPCell(paraData));

                //document.Add(tableHeader);
                //document.NewPage();

                PdfPTable Info = new PdfPTable(1);
                Paragraph paraData = new Paragraph("Data From: " + fromDate + "To: " + toDate);
                Info.AddCell(new PdfPCell(paraData));

                document.Add(Info);


                PdfPTable table = new PdfPTable(4);
                table.AddCell("ID");
                table.AddCell("Description");
                table.AddCell("Tool ID");
                table.AddCell("Date");
                //table.AddCell("Status");
                foreach (PreventiveMasterModel item in lstPreventiveMasterModel)
                {
                    table.AddCell(item.IssueID.ToString());
                    table.AddCell(item.Description.ToString());
                    table.AddCell(item.ToolID.ToString());
                    table.AddCell(item.IssueRaisedTime.ToString());
                    //table.AddCell(item.Status.ToString());
                }

                document.Add(table);
                //Phrase phrase = new Phrase("This is from Phrase.");
                //document.Add(phrase);

                //Paragraph para = new Paragraph("This is from paragraph.");
                //document.Add(para);

                //string text = @"you are successfully created PDF file.";
                //Paragraph paragraph = new Paragraph();
                //paragraph.SpacingBefore = 10;
                //paragraph.SpacingAfter = 10;
                //paragraph.Alignment = Element.ALIGN_LEFT;
                //paragraph.Font = FontFactory.GetFont(FontFactory.HELVETICA, 12f, BaseColor.GREEN);
                //paragraph.Add(text);
                //document.Add(paragraph);

                Random r = new Random(121);
                string fileName = Convert.ToDateTime(fromDate).ToString("MMddyyyy") + "-" + Convert.ToDateTime(toDate).ToString("MMddyyyy") + "-Preventive Maintenance" + r.Next() + ".pdf";
                document.Close();
                byte[] bytes = memoryStream.ToArray();
                memoryStream.Close();
                var testFile = Path.Combine(Server.MapPath("~/Download"), fileName);
                System.IO.File.WriteAllBytes(testFile, bytes);
                path = "/Download/" + fileName;

            }
            TempData["path"] = path;
            return RedirectToAction("PreventiveReport");
        }


        // GET: TMPUS
        public ActionResult ProductionPlan()
        {
            return View();
        }

        public ActionResult ProductionReport()
        {
            return View();
        }

        public ActionResult DispatchMonitoring()
        {
            return View();
        }

        public ActionResult DispatchReport()
        {
            return View();
        }

        public ActionResult ToolManagement()
        {
            return View();
        }

        public ActionResult ToolHistory()
        {
            return View();
        }
        public ActionResult ProductionData()
        {
            return View();
        }
        public ActionResult ToolData()
        {
            return View();
        }
        public ActionResult QualityData()
        {
            return View();
        }
        public ActionResult MasterData()
        {
            return View();
        }
        public ActionResult ProductionMasterData()
        {
            return View();
        }
        public ActionResult MaintenanceMasterData()
        {
            return View();
        }

    }
}