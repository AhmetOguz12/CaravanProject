using Business.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CaravansController : ControllerBase
    {
        ICaravanService _caravanService;

        public CaravansController(ICaravanService caravanService)
        {
            _caravanService = caravanService;
        }

        [HttpGet("getall")]
        public IActionResult GetAll()
        {
            var result = _caravanService.GetAll();
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("caravandetaildto")]
        public ActionResult GetCaravanDetailDto()
        {
            var result = _caravanService.GetCaravanDetails();
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("caravandetaildtobyid")]
        public ActionResult GetCaravanDetailDtoById(int id)
        {
            var result = _caravanService.GetCaravanDetailsById(id);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("id")]
        public ActionResult Get(int id)
        {
            var result = _caravanService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
        [HttpGet("getbybrandid")]
        public ActionResult GetByBrandId(int brandId)
        {
            var result = _caravanService.GetByBrandId(brandId);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("getbycolorid")]
        public ActionResult GetByColorId(int colorId)
        {
            var result = _caravanService.GetByColorId(colorId);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
        [HttpGet("getbycoloridwithbrandid")]
        public ActionResult GetByColorIdWithBrandId(int colorId, int brandId)
        {
            var result = _caravanService.GetByColorIdWithBrandId(colorId, brandId);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
        [HttpPost("add")]
        public IActionResult Add(Caravan caravan)
        {
            var result = _caravanService.Add(caravan);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public ActionResult Delete(Caravan caravan)
        {
            var result = _caravanService.Delete(caravan);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPut("update")]
        public ActionResult Update(Caravan caravan)
        {
            var result = _caravanService.Update(caravan);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

    }
}
