package com.wilson.jwt_test.product;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/products")
@RestController
public class ProductController {

    private final ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // Endpoint to get a product (for now it returns a test message)
    @GetMapping
    public ResponseEntity<String> getProduct(){
        return ResponseEntity.ok("You are accessing this secured endpoint");
    }

    // Endpoint to create a new product
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody @Valid Product product){
        return ResponseEntity.status(HttpStatus.CREATED).body(
                productRepository.save(product)
        );
    }
}
