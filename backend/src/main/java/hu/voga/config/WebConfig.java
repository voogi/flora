package hu.voga.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Web configurations.
 */
@Configuration
public class WebConfig extends WebMvcConfigurerAdapter
{

    /**
     * Defined images resource path.
     */
    public static final String IMAGES_RESOURCE_PATH = "/static/images/";

	public static final String CVS_RESOURCE_PATH = "/static/cvs/";

    /**
     * Define image location folder.
     */
	@Value("${images.location}")
	private String imagesLocation;

	@Value("${cvs.location}")
	private String cvsLocation;

	@Override
	public final void addCorsMappings(final CorsRegistry registry)
	{
		registry.addMapping("/**")
				.allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD");
	}

	@Override
	public final void addResourceHandlers(final ResourceHandlerRegistry registry)
	{
		registry.addResourceHandler(IMAGES_RESOURCE_PATH + "**").addResourceLocations("file:///" + imagesLocation);
		registry.addResourceHandler(CVS_RESOURCE_PATH + "**").addResourceLocations("file:///" + cvsLocation);
	}
}
