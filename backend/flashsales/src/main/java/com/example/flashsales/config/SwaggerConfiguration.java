package com.example.flashsales.config;

import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
public class SwaggerConfiguration {
    @Bean
    Docket docket() {
        return new Docket(DocumentationType.OAS_30).useDefaultResponseMessages(false)
                .produces(Stream.of("application/xml", "application/json").collect(Collectors.toSet())).select()
                .paths(Predicate.not(PathSelectors.regex("/error.*"))).build()
                .protocols(Stream.of("http", "https").collect(Collectors.toSet()));
    }
}
