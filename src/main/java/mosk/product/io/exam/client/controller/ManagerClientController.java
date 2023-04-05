package mosk.product.io.exam.client.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/client")
public class ManagerClientController {

    @GetMapping("/add")
    public String testAddPage() {
        return "/add";
    }
}
